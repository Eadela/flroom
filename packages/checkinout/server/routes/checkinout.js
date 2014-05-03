'use strict';

var checkinout = require('../controllers/checkinout');

// The Package is past automatically as first parameter
module.exports = function(Checkinout, app, auth, database) {

    app.route('/checks/:username')
        .get(auth.requiresLogin, checkinout.fetch)
        .post(auth.requiresLogin, checkinout.create)
        .put(auth.requiresLogin, checkinout.update);

    app.get('/checkinout/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/checkinout/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/checkinout/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/checkinout/example/render', function(req, res, next) {
        Checkinout.render('index', {
            package: 'checkinout'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
