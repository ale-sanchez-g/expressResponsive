var app_env = process.env['APP_ENV'];
var apiUrl;

switch (app_env) {
    case "local":
        apiUrl = "http://127.0.0.1:3001/";
        console.log("127.0.0.1:3001 config");
        break;
    default:
        apiUrl = "https://guarded-scrubland-78590.herokuapp.com/";
        console.log("production config");
}

exports.gallery = function(req, res){
    var gTag = req.query.tag;
    res.render('gallery', {tag: gTag, api: apiUrl});
};