/* GET gallery page. */
exports.gallery = function(req, res){
    var gTag = req.query.tag;

    res.render('gallery', {tag: gTag});
};