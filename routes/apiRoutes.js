var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        for (var i = 0; i < friends.length; i++) {
        	friends[i]
        }
    });
}


// var currentBfName;
// var currentBfScore;
// var currentBfPic;
// var friendScore;

// for each friend, loop through each scores array, 
//  subtracting each number from body.scores then add it to friend scores
//  if friendScore is greater than currentBfScore set currentBf to friend[i].name and currentBfPic  