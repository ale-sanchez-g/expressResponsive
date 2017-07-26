var request = require('request');
var app_env = process.env['APP_ENV'];
var apiUrl = process.env['API_URL'] || "https://guarded-scrubland-78590.herokuapp.com/";


exports.home = function(req, res){
  res.render('home', {api: apiUrl});
};
