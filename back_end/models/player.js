// import mongoose module
const mongoose= require("mongoose");
// create match schema
const playerSchema= mongoose.Schema({
    number: Number,
    age: Number,
    name : String,
    position: String,

});
// / create player model
const player= mongoose.model("Player",playerSchema);
// / MAKE player EXPORTABLE
module.exports=player;