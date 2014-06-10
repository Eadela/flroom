'use strict';
// The Package is past automatically as first parameter
module.exports = function(Scheduling, app, auth, database) {

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
