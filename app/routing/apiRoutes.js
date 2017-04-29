var wdfriends = require('../data/wdfriends.js');
var newWDFriends = require('../data/newWDFriends.js');

module.exports = function(newApp) {

    newApp.get('/api/wdfriends', function(req, res) {
        res.json(wdfriends);
    })

    newApp.get('/api/new-wdfriends', function(req, res) {
        res.json(newWDFriends);
    })

    newApp.post('/api/new-wdfriends', function(req, res) {

        var matchDiff = 50;
        var tempDiff = 0;
        var name;
        var img;


        for (var i = 0; i < wdfriends.length; i++) {

            for (var j = 0; j < wdfriends[i].scores.length; j++) {

                var newFriendScores = parseInt(req.body["scores[]"][j]);
                var wdfriendscores = wdfriends[i].scores[j];

                if (newFriendScores > wdfriendscores) {
                    tempDiff += (newFriendScores - wdfriendscores);
                } else if (newFriendScores < wdfriendscores) {
                    tempDiff += (wdfriendscores - newFriendScores);
                } else if (newFriendScores === wdfriendscores) {
                    tempDiff += 0;
                }
            }


            if (tempDiff < matchDiff) {
                matchDiff = tempDiff;
                name = wdfriends[i].name;
                img = wdfriends[i].photo;
            }


            tempDiff = 0;
        }


        var match = {
            name: name,
            photo: img,
        };


        newWDFriends.push(req.body);

        res.json(match);
    })

}
