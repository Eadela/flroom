'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Checkinout = new Module('Checkinout');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Checkinout.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Checkinout.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Checkinout.menus.add({
        title: '签到',
        link: 'checkinout example page',
        roles: ['authenticated'],
        menu: 'main'
    });

    /*
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Checkinout.settings({
	'someSetting': 'some value'
    }, function(err, settings) {
	//you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Checkinout.settings({
	'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Checkinout.settings(function(err, settings) {
	//you now have the settings object
    });
    */

    return Checkinout;
});
