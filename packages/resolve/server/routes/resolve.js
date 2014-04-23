'use strict';

// The Package is past automatically as first parameter
module.exports = function(Resolve, app, auth, database) {

    app.get('/resolve/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/resolve/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/resolve/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/resolve/example/render', function(req, res, next) {
        Resolve.render('index', {
            package: 'resolve'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
