const User = require("../../models/user/users");
const {generateAccessToken,generateRefreshToken} = require("../../utils/tokenutils");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


let refreshTokens = [];

//registerController
const registerController = async(req,res,next) => {
     try {
            const {username,password,email} = req.body;
    
            const existinguser = await User.findOne({email});
            if(existinguser) return res.status(400).json({error:"User already exist "});
    
            const hashedPass = await bcrypt.hash(password,10);
            const newUser = new User({username,email,password:hashedPass});
            await newUser.save();
    
            res.status(201).json({message:"user registered successfully"});
    
        } catch (error) {
            res.status(500).json(error);
            console.log(error)
        }
}


//loginController
const loginController = async(req,res,next) => {
    try {
        const {username,email,password} = req.body;
 
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({error:"invalid credentials"});
 
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) return res.status(400).json({error:"invalid credentials"});
        
        const accessToken = generateAccessToken({id:user._id,username:user.username});
        const refreshToken = generateRefreshToken({id:user._id,username:username});
 
        refreshTokens.push(refreshToken)
        res.json({accessToken,refreshToken});
     } catch (error) {
         res.status(500).json({error : "Server Error"});
         console.log(error);
     }
}

//logOutController

const logOutController = async(req,res,next) => {
    const {token} = req.body;
    if(!token) return res.status(400).json({error:"TOken is required"});

    refreshTokens = refreshTokens.filter(t => t!==token);
    res.status({message:"logged out successfully"});
}

//refreshController
 refreshTokenController = async(req,res,next) => {
    const{token} = req.body;
   if(!token) return res.status(401).json({error:"refresh token required"});
   if(refreshTokens.includes(token)) return res.status(403).json({error:"Invalid Token"});

   jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
    if(err) return res.status(403).json({error:"invalid Token"});

    const accessToken = generateAccessToken({id:user._id,username:username});
    res.json({accessToken});
   });
 }

 //meEndpointController
 meController = (req,res,next) => {
    try {
        res.json(req.user);
    } catch (error) {
        res.status(500);
    }
 }

module.exports = {
    registerController,loginController,
    logOutController,refreshTokenController,
    meController
}