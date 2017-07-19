var request = require('request');

exports.password = function(req, res){
    var leng = req.params.leng;

        request.get('https://guarded-scrubland-78590.herokuapp.com/' + leng, function(err, response, body) {
            if (!err && response.statusCode == 200) {
                var locals = JSON.parse(body);
                res.render('password', locals);
            }
        })
};