
module.exports = function(app) {
    app.get('/wx', function(req, res) {
        res.send(req.query.echostr);
    });
   
}