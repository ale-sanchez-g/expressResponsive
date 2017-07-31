var request = require('request');
var app_env = process.env['APP_ENV'];
var apiUrl;
var languageTag;

switch (app_env) {
    case "local":
        apiUrl = "http://alejandro:3001/";
        console.log("alejandro:3001 config");
        break;
    default:
        apiUrl = "https://guarded-scrubland-78590.herokuapp.com/";
        console.log("production config");
}

exports.password = function(req, res){
    var leng = req.params.leng;
    var language = req.query.language;
    var number = req.query.number || 4;
    var special = req.query.special || false;

    console.log(language);
    console.log(number);
    console.log(special);

    if (language === undefined) {

        console.log(leng);

        switch (leng) {
            case "english":
                languageTag = "words";
                break;
            case "spanish":
                languageTag = "palabras";
                break;
            case "german":
                languageTag = "worts";
                break;
            default:
                languageTag = "help";
        }
    } else {
        languageTag = language;
    }


    var routing = apiUrl + "api/password?language=" + languageTag + "&number=" + number + "&special=" + special;
    console.log(routing);

        request.get(routing, function(err, response, body) {
            if (!err && response.statusCode == 200) {
                var locals = JSON.parse(body);
                res.render('password', locals);
            }
        })
};