'use strict';

var checkinout = require('../controllers/checkinout');

// The Package is past automatically as first parameter
module.exports = function(Checkinout, app, auth, database) {

    app.route('/checks/:username')
        .get(auth.requiresLogin, checkinout.get)
        .post(auth.requiresLogin, checkinout.create)
        .put(auth.requiresLogin, checkinout.update);
    app.get('/CheckRecord/:username', checkinout.fetch);

    app.get('/checkinout/example/render', function(req, res, next) {
        Checkinout.render('index', {
            package: 'checkinout'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
