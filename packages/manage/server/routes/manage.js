'use strict';

// The Package is past automatically as first parameter
module.exports = function(Manage, app, auth, database) {

    app.get('/manage/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/manage/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/manage/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/manage/example/render', function(req, res, next) {
        Manage.render('index', {
            package: 'manage'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
