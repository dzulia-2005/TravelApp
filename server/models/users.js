const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:false,
        lowercase:false,
    },

    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        require:true,
    },

    password:{
        type:String,
        trim:true,
    },

    countries:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }]
},{timestamps:true})

const user = mongoose.model("user",userSchema);
module.exports = user;