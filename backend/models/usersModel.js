const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    firstName: { type: String },
    lastName: { type: String },
    affiliation: { type: String },
    title: { type: String },
    orcidId: { type: String },
    userRole: {type: Array, required: true, default: "author"}

    
});

module.exports = Users = mongoose.model("Users", userSchema);