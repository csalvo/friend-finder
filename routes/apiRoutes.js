var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        currentFriendScore = 100;

        for (var i = 0; i < friends.length - 1; i++) {
            findFriend(req.body, friends[i]);
        }
        res.json(currentBf);
        console.log(currentBf);
    });
}




// for each friend, loop through each scores array, 
//  subtracting each number from body.scores then add it to friend scores
//  if friendScore is greater than currentBfScore set currentBf to friend[i].name and currentBfPic  

var findFriend = function(newUser, friend) {
	console.log(friend);
var friendScore = 0;

    for (var i = 0; i < friend.scores.length; i++) {
        friendScore += Math.abs(friend.scores[i] - newUser.scores[i]);
   console.log(friendScore);
    }

       getBestFriend(friend, friendScore);
}

var getBestFriend = function(friend, thisFriendsScore) {

    if (thisFriendsScore < currentFriendScore) {
        currentFriendScore = thisFriendsScore;
        currentBf = friend;
        return (currentBf);
    }
}