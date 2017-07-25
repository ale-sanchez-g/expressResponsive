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

exports.password = function(req, res){
    var leng = req.params.leng;

    switch (leng) {
        case "english":
            apiTag = "password";
            break;
        case "spanish":
            apiTag = "palabras";
            break;
        case "german":
            apiTag = "worts";
            break;
        default:
            apiTag = "help";

    }
        request.get(apiUrl + apiTag, function(err, response, body) {
            if (!err && response.statusCode == 200) {
                var locals = JSON.parse(body);
                res.render('password', locals);
            }
        })
};