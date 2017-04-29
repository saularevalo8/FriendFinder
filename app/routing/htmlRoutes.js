var path = require('path');

module.exports = function(newApp) {

  newApp.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  })
  
  newApp.use(function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  })
}