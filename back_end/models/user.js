// import mongoose module
const mongoose= require("mongoose");


const uniqueValidator = require('mongoose-unique-validator');

// create match schema
const userSchema= mongoose.Schema({
    firstName: String,
    lastName: String,
    email : {type:String, unique: true},
    pwd: String,
    role: String,

});
userSchema.plugin(uniqueValidator);
// create user model
const user= mongoose.model("User",userSchema);
// MAKE user EXPORTABLE
module.exports=user;