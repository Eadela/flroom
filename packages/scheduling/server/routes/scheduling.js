'use strict';
var request = require('request');
// The Package is past automatically as first parameter
module.exports = function(Scheduling, app, auth, database) {
    app.get('/scheduling/example/checkcode', function(req, res, next) {
        var options = {
            url: 'http://jwxt1.cumt.edu.cn/CheckCode.aspx'
        };

        function callback(error, response, body) {
            if (error) {
                console.log('error');
            }
            if (!error && response.statusCode === 200) {
                res.set({'Content-Type': 'image/Gif'});
                res.cookie('checkcode',response.headers['set-cookie'][0]);
                console.log(response);
                res.send(body);
            }
        }
        request(options, callback);
    });

    app.get('/scheduling/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/scheduling/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/scheduling/example/render', function(req, res, next) {
        Scheduling.render('index', {
            package: 'scheduling'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
