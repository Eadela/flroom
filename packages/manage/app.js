'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Manage = new Module('Manage');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Manage.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Manage.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Manage.menus.add({
        title: '管理设置',
        link: 'manage example page',
        roles: ['admin'],
        menu: 'main'
    });

    /*
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Manage.settings({
	'someSetting': 'some value'
    }, function(err, settings) {
	//you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Manage.settings({
	'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Manage.settings(function(err, settings) {
	//you now have the settings object
    });
    */

    return Manage;
});
