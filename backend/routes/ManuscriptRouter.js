const path = require('path');
const express = require('express');
const multer = require('multer');
const File = require('../models/ManuscriptModel');
const Router = express.Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, './files');
        },
        filename(req, file, cb) {
            cb(null, `${new Date().getTime()}_${file.originalname}`);
        }
    }),
    limits: {
        fileSize: 25000000 // max file size 25MB = 25000000 bytes
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(pdf|docx|zip)$/)) {
            return cb(
                new Error(
                    'only upload pdf, microsoft word and zip files.'
                )
            );
        }
        cb(undefined, true); // continue with upload
    }
});
Router.post(
    '/upload',
    upload.single('file'),
    async (req, res) => {
        try {
            const { manuscriptTitle, keywords, track, abstract } = req.body;
            const { path, mimetype } = req.file;
            const file = new File({
                manuscriptTitle,
                keywords,
                track,
                abstract,
                file_path: path,
                file_mimetype: mimetype
            });
            await file.save();
            res.send('file uploaded successfully.');
        } catch (error) {
            res.status(400).send('Error while uploading file. Try again later.');
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(500).send(error.message);
        }
    }
);
Router.get('/getAllFiles', async (req, res) => {
    try {
        const files = await File.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
Router.get('/download/:id', async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});
module.exports = Router;