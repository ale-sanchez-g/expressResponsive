var request = require('request');

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
        request.get('https://guarded-scrubland-78590.herokuapp.com/' + apiTag, function(err, response, body) {
            if (!err && response.statusCode == 200) {
                var locals = JSON.parse(body);
                res.render('password', locals);
            }
        })
};