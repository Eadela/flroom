'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Statistics = new Module('Statistics');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Statistics.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Statistics.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Statistics.menus.add({
        title: 'statistics example page',
        link: 'statistics example page',
        roles: ['minister','inspector'],
        menu: 'main'
    });

    /*
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Statistics.settings({
	'someSetting': 'some value'
    }, function(err, settings) {
	//you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Statistics.settings({
	'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Statistics.settings(function(err, settings) {
	//you now have the settings object
    });
    */

    return Statistics;
});
