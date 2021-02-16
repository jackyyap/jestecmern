const jwt = require("jsonwebtoken");
const Users = require("./../models/usersModel");

const auth = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token)
            return res
                .status(401)
                .json({ msg: "No authentication token, access denied." });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified)
            return res
                .status(401)
                .json({ msg: "Token verification failed, access denied." });

        const user = await Users.findById(verified.id);
        req.user = user;
        next();

    } catch (err) {
        res
            .status(500)
            .json({ error: err.message });
    };
};

const authRole = (...roles) => {
    return (req, res, next) => {
        console.log(roles);
        if (!roles.includes(req.user.userRole)) {
            return res
                .status(401)
                .json({ msg: "You are not authorized to access this page" });
        }
        next();
    };
};


module.exports = { auth, authRole };