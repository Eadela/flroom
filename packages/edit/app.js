'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Edit = new Module('Edit');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Edit.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Edit.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Edit.menus.add({
        title: 'edit example page',
        link: 'edit example page',
        roles: ['editor','minister'],
        menu: 'main'
    });

    /*
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Edit.settings({
	'someSetting': 'some value'
    }, function(err, settings) {
	//you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Edit.settings({
	'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Edit.settings(function(err, settings) {
	//you now have the settings object
    });
    */

    return Edit;
});
