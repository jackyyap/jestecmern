const mongoose = require('mongoose');

const ManuscriptSchema = mongoose.Schema(
    {
        manuscriptTitle: {
            type: String,
            required: true,
            trim: true
        },
        keywords: {
            type: String,
            required: true,
            trim: true
        },
        track: {
            type: String,
            required: true,
            trim: true
        },
        abstract: {
            type: String,
            required: true,
            trim: true
        },
        file_path: {
            type: String,
            required: true
        },
        file_mimetype: {
            type: String,
            required: true
        },
        manuscriptId: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

const File = mongoose.model('File', ManuscriptSchema);
module.exports = File;