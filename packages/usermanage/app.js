'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Usermanage = new Module('Usermanage');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Usermanage.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Usermanage.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Usermanage.menus.add({
        title: 'usermanage example page',
        link: 'usermanage example page',
        roles: ['admin'],
        menu: 'main'
    });

    /*
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Usermanage.settings({
	'someSetting': 'some value'
    }, function(err, settings) {
	//you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Usermanage.settings({
	'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Usermanage.settings(function(err, settings) {
	//you now have the settings object
    });
    */

    return Usermanage;
});
