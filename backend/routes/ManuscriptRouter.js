const Users = require('../models/usersModel');

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

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

Router.post(
    '/upload',
    upload.single('file'),
    async (req, res) => {
        try {
            const date = new Date();
            const year = date.getFullYear();  
            const month = date.getMonth() + 1;

            const yearStr = year.toString();
            const monthStr = month.toString();

            const manuid = yearStr+"-"+monthStr+"-"+makeid(4);

            console.log(manuid);
            const { manuscriptTitle, keywords, track, abstract } = req.body;
            const { path, mimetype } = req.file;
            const file = new File({
                manuscriptTitle,
                keywords,
                track,
                abstract,
                file_path: path,
                file_mimetype: mimetype,
                manuscriptId: manuid,
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
Router.get('/getFile/:id', async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        res.send(file);
    } catch (error) {
        res.status(400).send('Error while getting file. Try again later.');
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

// Router.get('/editormodal/:id', async (req, res) => {
//     try {
//         const modal = await File.findById(req.params.id);
//         res.send(modal);
//     } catch (error) {
//         res.status(400).send('Error while getting list of files. Try again later.');
//     }
// });


//userouter

Router.get('/getUsers', async (req, res) => {
    try {
        const users = await Users.find({});

        res.send(users);
    } catch (error) {
        res.status(400).send('Error while getting list of users. Try again later.');
    }
});

module.exports = Router;