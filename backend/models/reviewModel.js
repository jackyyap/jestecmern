const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({

    manuscriptId: {
        type: String,
        required: true,
        unique: true
    },
    scopeScore: {
        type: Number,
        required:true,
    },
    originalScore: {
        type: Number,
        required:true,
    },
    errorScore: {
        type: Number,
        required:true,
    },
    readableScore: {
        type: Number,
        required:true,
    },
    conciseScore: {
        type: Number,
        required:true,
    },
    lengthScore: {
        type: Number,
        required:true,
    },
    commentToAuthor: {
        type: String,
        required:true,
    },
    recommndation: {
        type: String,
        required:true,
    },
    commentToEditor: {
        type: String,
        required:true,
    },
    file_path: {
        type: String,
        required: true
    },
    file_mimetype: {
        type: String,
        required: true
    },
})

const Reviews = mongoose.model('Reviews', ReviewSchema);
module.exports = Reviews;