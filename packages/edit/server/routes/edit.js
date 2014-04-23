'use strict';

// The Package is past automatically as first parameter
module.exports = function(Edit, app, auth, database) {

    app.get('/edit/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/edit/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/edit/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/edit/example/render', function(req, res, next) {
        Edit.render('index', {
            package: 'edit'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
