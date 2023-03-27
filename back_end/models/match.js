// import mongoose module
const mongoose= require("mongoose");
// create match schema
const matchSchema= mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne : String,
    teamTwo : String,

});
// create match model
const match= mongoose.model("Match",matchSchema);
// MAKE MATCH EXPORTABLE
module.exports=match;