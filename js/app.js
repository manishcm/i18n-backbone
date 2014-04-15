define(['router','jquery','i18n'], function (Router, $, i18n) {
  'use strict';
 
	i18n.init({
        lng: 'en-US',
        debug: true,
        fallbackLng: 'en'
    }, function () {
        // i18next is done asynchronously; this is the callback function
        $("body").i18n();
    });
	
  return {
    initialize: function () {
	  Router.initialize();
    }
  };
});
