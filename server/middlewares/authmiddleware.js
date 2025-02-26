const jwt = require("jsonwebtoken");
const User = require("../models/users");

const authMiddleware = async (req,res,next) => {
    const authHeader = req.header.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({error:"Unauthorization"});
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        req.user = await User.findById(decoded.id).select("-password");
        next()
    } catch (error) {
        return res.status(403).json({error:"Invalid or expired Token"});
    }
}

module.exports = authMiddleware;

