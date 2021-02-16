const path = require('path');
const express = require('express');
const multer = require('multer');
const Reviews = require('../models/reviewModel');
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
    '/upload-review',
    upload.single('file'),
    async (req, res) => {
        try {

            const { 
                manuscriptId, 
                scopeScore, 
                originalScore, 
                errorScore, 
                readableScore,
                conciseScore,
                lengthScore,
                commentToAuthor,
                recommendation,
                commentToEditor,
            } = req.body;
            const { path, mimetype } = req.file;
            const file = new Reviews({
                manuscriptId, 
                scopeScore, 
                originalScore, 
                errorScore, 
                readableScore,
                conciseScore,
                lengthScore,
                commentToAuthor,
                recommendation,
                commentToEditor,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send('file uploaded successfully.');
        } catch (error) {
            res.status(400).send(error);
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(500).send(error.message);
        }
    }
);