var request = require('request');
var app_env = process.env['APP_ENV'];
var apiUrl;

switch (app_env) {
  case "local":
    apiUrl = "http://10.90.113.3:3001/";
    console.log("locahost:3001 config");
    break;
  default:
    apiUrl = "https://guarded-scrubland-78590.herokuapp.com/";
    console.log("production config");
}

exports.home = function(req, res){
  res.render('home', {api: apiUrl});
};
