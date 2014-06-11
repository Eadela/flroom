'use strict';
/*var request = require('request');
var encoding = require('encoding');*/
// The Package is past automatically as first parameter
module.exports = function(Scheduling, app, auth, database) {
/*    var options = {
        url: 'http://202.119.199.113:8080/servletForstudio/servlet/GetScheduleServletJsonInterface?xh=08113464',
        headers: {
            'User-Agent': 'request'
        }

    };

    function callback(error, response, body) {
        if (error) {
            console.log('error');
        }
        if (!error && response.statusCode === 200) {
            console.log(body);
        }
    }

    request(options, callback);*/

    app.get('/scheduling/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
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
