var app_env = process.env['APP_ENV'];
var apiUrl = process.env['API_URL'] || "https://guarded-scrubland-78590.herokuapp.com/";

exports.gallery = function(req, res){
    var gTag = req.query.tag;
    res.render('gallery', {tag: gTag, api: apiUrl});
};