// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import mongoos
const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/sportFekriDB');
// IMPORTATION BCRYPT
const bcrypt = require("bcrypt");
//impoertatin jwt
const jwt= require("jsonwebtoken");
const authenticate= require("./middelware/authenticate")

// sportFekriDB BDATA BASE NAME
// Creates an Express application
const app = express();
// configure body-parser 
// send JSON response
app.use(bodyParser.json());
// get objects from request
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// ***********************************************************
// IMPORT MATCH MODEL
const Match = require("./models/match");
// IMPORT PLAYER MODEL
const Player = require("./models/player")
// IMPORT user MODEL
const User = require("./models/user")
//import team model
const Team = require("./models/team")




let matchesTab = [{ id: 1, scoreOne: 2, scoreTwo: 0, teamOne: "ca", teamTwo: "est" },
{ id: 2, scoreOne: 0, scoreTwo: 0, teamOne: "caA", teamTwo: "est" },
{ id: 3, scoreOne: 0, scoreTwo: 0, teamOne: "ca", teamTwo: "estA" }
];
let playersTab = [{ id: 1, name: "Medi", age: 11, position: "mkdir", number: 3 }];
// business logic : add match
app.post("/matches", (req, res) => {
    console.log("Here BL : Add Match");
    //CREATE MATCH VAR DE TYPE MATCH
    let match = new Match({
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,

    });
    console.log("here match", match);
    match.save();
    // matchesTab.push(match);
    res.json({ message: "added" });
});

// business logic : get all matches
app.get("/matches", (req, res) => {
    console.log("Here BL : Get All Matches");
    Match.find().then((data) => { res.json({ matches: data, message: "ok" }) })

});

// business logic : Edit Match
app.put("/matches", (req, res) => {
    console.log("Here BL : Edit Match");
    let newMatch = req.body;
    Match.updateOne({ _id: newMatch._id }, newMatch).then((editResponse) => {
        console.log("editResponse", editResponse.nModified);
        if (editResponse) {
            res.json({ message: "match edited with succes" })
        }
    })
});

// business logic :get Match by id
app.get("/matches/:id", (req, res) => {
    console.log("Here BL : get Match by id");
    let id = req.params.id;
    Match.findOne({ _id: id }).then((doc) => { res.json({ findedMatch: doc }) })
    // let match = {};
    // for (let i = 0; i < matchesTab.length; i++)
    //     if (matchesTab[i].id == id) {
    //         match = matchesTab[i];
    //         break;
    //     }
    // res.json({ findedMatch: match })
});

// business logic :delete Match 
app.delete("/matches/:id", (req, res) => {
    console.log("Here BL : delete Match by id");
    let id = req.params.id;
    for (let i = 0; i < matchesTab.length; i++) {
        if (matchesTab[i].id == id) {
            matchesTab.splice(i, 1);
            break;
        }
    }
    res.json({ message: `Match n ${id} is deleted` })

});
// *********************************************************************
// business logic : add player
app.post("/players", (req, res) => {
    console.log("Here BL : Add Player");
    let player = new Player({
        name: req.body.name,
        age: req.body.age,
        position: req.body.position,
        number: req.body.number
    });
    console.log("here player", player);
    player.save();
    // playersTab.push(player);
    res.json({ message: "added" });
});

// business logic : Edit player
app.put("/players", (req, res) => {
    console.log("Here BL : Edit player");

});

// business logic :delete Player
app.delete("/players/:id", (req, res) => {
    console.log("Here BL : delete player");

});
// business logic :get player by id
app.get("/players/:id", (req, res) => {
    console.log("Here BL : get player by id");

});
// business logic : get all players
app.get("/players", (req, res) => {
    console.log("Here BL : Get All players");

});
// ********************************************************
// business logic : login
app.post("/users/signin", (req, res) => {
    console.log("Here BL : login", req.body);
    let user = req.body;
    let findedUser;
    User.findOne({ email: user.email }).then(
        (doc) => {
            console.log("here searshed object by email", doc);
            if (!doc) {
                res.json({ message: "check Email" })
            }
            return bcrypt.compare(user.password, doc.password);
        }).then(
            (pwdResult) => {
                console.log("here pwdResult", pwdResult);
                if (!pwdResult) {
                    res.json({ message: "check pwd" });
                } else {
                    const token = jwt.sign(
                        {
                        email: findedUser.email,
                        userId: findedUser._id,
                        userRole: findedUser.role,
                        },
                        "Testing" ,
                        { expiresIn: "1min" }
                        );
                        let userToSend = {
                        id: findedUser._id,
                        firstName: findedUser.firstName,
                        lastName: findedUser.lastName,
                        role: findedUser.role,
                        jwt: token,
                        expiresIn: 60,
                        };
                    res.json({ message: "welcome" });
                }
            }

        );





});
// business logic : signup
app.post("/users/subscription", (req, res) => {
    console.log("Here BL : signup", req.body);
    bcrypt.hash(req.body.password, 8).then(
        (cryptedPwd) => {
            let user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                pwd: cryptedPwd,
                role: req.body.role,

            })
            user.save((error, doc) => {
                console.log("here erroe", error);
                console.log("here doc", doc);
                if (doc) {
                    res.json({ message: "user added with success" });

                } else {
                    res.json({ message: "ERROR" });
                }






            }

            );
            res.json({ message: "user added with success" });


        }

    )

});

// business logic : Edit Profile
app.put("/users", (req, res) => {
    console.log("Here BL : Edit profile");

});

// app.post("/matches/search",(req,res)=>{
//     console.log("Here BL : search", req.body); 
//     let searchMatch =[];
//    for (let i = 0; i < matchesTab.length; i++) {
//   if (matchesTab[i].scoreOne == req.body.scoreOne &&
//     matchesTab[i].scoreTwo == req.body.scoreTwo
//     ) {

//   }

//    }  
//     }
//     let searchMatch =req.body;

//     console.log("here search", searchMatch);

//     res.json({});
// })


// make app importable from another files

//busnesslogicaddteam
app.post("/teams", (req, res) => {
    console.log("here into bl :team", req.body);
    let teamObject = new Team({

        teamName: req.body.name,
        teamStadium: req.body.stadium,
        teamOwner: req.body.owner,
        teamFoundation: req.body.foundation,
    })
    teamObject.save((err, doc) => {
        if (err) {
            res.json({ message: "nok" })
        } else {
            res.json({ message: "ok" })
        }
        //(err)?res.json({message:"nok"}):res.json({message:"ok"});
    });


})

//BL GETALL TEAM
app.get("/teams", (req, res) => {
    console.log("here into bl :get all teams");
    Team.find().then(
        (objs) => {
            res.json({ teams: objs });
        }
    )
})

//bll delete team by id
app.delete("/teams/:id", (req, res) => {
    let teamId = req.params.id;
    console.log("here into delete by id ,", teamId);
    Team.deleteOne({ _id: teamId }).then(
        (deleteResponse) => {
            console.log("deleteResponse", deleteResponse);
            if (deleteResponse.deletedCount == 1) {
                res.json({ message: "delete with success" })
            };
        }
    )
})
//bl get team by id
app.get("/teams/:id"), (req, res) => {
    let teamId = req.params.id;
    console.log("here into delete by id ,", teamId);
    Team.findOne({ _id: teamId }).then(
        (Response) => {
            // console.log(Response);
            res.json({ team: Response })

        })
}



module.exports = app;
