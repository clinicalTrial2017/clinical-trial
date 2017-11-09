var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.register = function(req, res) {
  console.log('starting server regist!');
  var user = new User();

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });
};


module.exports.login = function(req, res) {

  console.log(req.body);
  console.log('login started!!!!!');
  passport.authenticate('local', function(err, user, info){

    console.log('passport.authenticate!!!!!');
    var token;

    // If Passport throws/catches an error
    if (err) {
      console.log('login ERROR!!!!!');
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      console.log('User Found!');
      token = user.generateJwt();
      console.log(token);
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      console.log('User not Found!');
      res.status(401).json(info);
    }
  })(req, res);

};
