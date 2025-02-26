const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "d429a6e10031ddb608ab43fd5c31aafc22a0a0e11b5f7a6bd231650aede17c85d28b59e563b7bc870ba990dcdf8c529a17f33f13fb839a67a8a45af9054639e2";
const refreshTokens = []; 

app.get('/api',(req,res)=>{
    res.json({
        message: "welcome to the api "
    })
})

app.post("/api/login",(req,res)=>{
//mock user
    const user = {
        id:1,
        username:"nikoloz",
        email:"dzuliashvilinika016@gmail.com"
    }

    const accessToken = jwt.sign({user},SECRET_KEY,{expiresIn:'30s'});
    const refreshToken = jwt.sign({user},SECRET_KEY,{expiresIn:"7d"})

    refreshTokens.push(refreshToken);
    res.json({accessToken,refreshToken});
});

app.post("/api/token",(req,res)=>{
    const {token}=req.body;

    if(!token) return res.status(401).json({error:"Refresh token required"});
    if(!refreshTokens.includes(token)) return res.status(403).json({error:"invalid refreshToken"});

    jwt.verify(token,SECRET_KEY,(err,user)=>{
        if(err) return res.status(403).json({error:"Invalid Token"});

        const accessToken = jwt.sign({user},SECRET_KEY,{expiresIn:"1h"});
        res.json({accessToken});
    })
})

app.post("/api/logout",(req,res)=>{
    const {token} =req.body;
    if(!token) return res.status(400).json({error:"token is not required"});

    const index = refreshTokens.indexOf(token);
    if(index !== -1) refreshTokens.splice(index,1);

    res.json({message:"Logged out successfully"})
})

function verifyToken (req,res,next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

app.listen(3000 , ()=>console.log("server started on 3000 port"));