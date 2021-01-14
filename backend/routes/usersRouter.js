const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../models/usersModel.js");

router.post("/register", async (req, res) => {
    try {
        let { email, password, passwordCheck, displayName } = req.body;

        // validate

        if (!email || !password || !passwordCheck)
            return res
                .status(400)
                .json({ msg: "Not all fields have been entered" });

        if (password.length < 8)
            return res
                .status(400)
                .json({ msg: "the password needs to be at least 8 characters long" });

        if (password !== passwordCheck)
            return res
                .status(400)
                .json({ msg: "Passwords entered does not match" });

        const existingUser = await Users.findOne({ email: email })
        if (existingUser)
            return res
                .status(400)
                .json({ msg: "Account already exists" });

        if (!displayName) displayName = email;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new Users({
            email,
            password: passwordHash,
            displayName,
        });

        const savedUser = await newUser.save();
        res.json(savedUser);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        //validate

        if (!email || !password)
            return res
                .status(400)
                .json({ msg: "Not all fields have been entered" });

        const user = await Users.findOne({ email: email });

        if (!user)
            return res
                .status(400)
                .json({ msg: "Account does not exist" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res
                .status(400)
                .json({ msg: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                displayName: user.displayName,
                email: user.email,
            },
        });
        console.log(token)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;