'use strict';

require.config({
    paths: {
        jquery: 'public/system/lib/jquery/dist/jquery.min'
    }
});
 
require(['jquery'], function($) {
	$('.addSchedule').popover('hide');
});