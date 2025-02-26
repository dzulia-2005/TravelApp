const jwt = require("jsonwebtoken"); 

function generateAccessToken (user) {
    return jwt.sign(user,process.env.SECRET_KEY,{expiresIn:"30s"})
}

function generateRefreshToken (user) {
    return jwt.sign(user,process.env.SECRET_KEY,{expiresIn:"7d"})
}

module.exports = {
    generateAccessToken,
    generateRefreshToken
}