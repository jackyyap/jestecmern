const router = require("express").Router();

router.post("/register", async (req, res) => {
    const { email, password, passwordCheck, displayName } = req.body;

    // validate

    if (!email || !password || !passwordCheck)
        return res
        .status(400)
        .json({ msg: "Not all fields have been entered" });

    if (password.length < 8)
        return res
        .status(400)
        .json({ msg: "the password needs to be at least 8 characters long"});

    if (password !== passwordCheck)
        return res
        .status(400)
        .json({ msg: "Passwords entered does not match"});
});

module.exports = router;