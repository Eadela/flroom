'use strict';

// The Package is past automatically as first parameter
module.exports = function(Usermanage, app, auth, database) {

    app.get('/usermanage/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/usermanage/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/usermanage/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/usermanage/example/render', function(req, res, next) {
        Usermanage.render('index', {
            package: 'usermanage'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
