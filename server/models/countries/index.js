const mongoose = require("mongoose");

const countriesSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },

    caption:{
        type:String,
        trim:true
    },

    image:[{
        type:String,
        trim:true,
    }],

    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }]
},{timestamps:true})

const countries = mongoose.model("countries",countriesSchema);
module.exports = countries;