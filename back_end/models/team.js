const mongoose= require("mongoose");
// create match schema
const teamSchema= mongoose.Schema({
    teamName: String,
    teamStadium: String,
    teamOwner : String,
    teamFoundation: String,

});
// / create player model
const team= mongoose.model("Team",teamSchema);
// / MAKE player EXPORTABLE
module.exports=team;