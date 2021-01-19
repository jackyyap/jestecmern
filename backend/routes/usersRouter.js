const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const Users = require("../models/usersModel.js");

router.post("/register", async (req, res) => {
    try {
        let { email, password, passwordCheck, firstName, lastName, affiliation, title } = req.body;

        // validate

        if (!email || !password || !passwordCheck || !firstName || !lastName || !affiliation || !title)
            return res
                .status(400)
                .json({ msg: "Not all fields have been entered" });

        if (password.length < 8)
            return res
                .status(400)
                .json({ msg: "The password needs to be at least 8 characters long" });

        if (password !== passwordCheck)
            return res
                .status(400)
                .json({ msg: "Passwords entered does not match" });

        const existingUser = await Users.findOne({ email: email })
        if (existingUser)
            return res
                .status(400)
                .json({ msg: "Account already exists" });



        // password encryption

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new Users({
            email,
            password: passwordHash,
            firstName,
            lastName,
            affiliation,
            title,
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
                firstName: user.firstName,
            },
        });
        console.log(token)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete("/delete", auth, async (req, res) => {
    try {
        const deletedUser = await Users.findByIdAndDelete(req.user);
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if (!token)
            return res
                .json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET)
        if (!verified)
            return res
                .json(false);

        const user = await Users.findById(verified.id);
        if (!user)
            return res.json(false);

        return res.json(true);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//get user document

router.get("/", auth, async (req, res) => {
    const user = await Users.findById(req.user);
    res.json({
        firstName: user.firstName,
        id: user._id,
    });
});

module.exports = router;