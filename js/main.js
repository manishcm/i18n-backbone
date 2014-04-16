require.config({
  paths: {
    underscore : 'libs/underscore.min',
    backbone   : 'libs/backbone.min',
    jquery     : 'libs/jquery.min',
    i18n       : 'libs/i18next.amd.withJQuery-1.6.3.min'
  },
  shim: {
    underscore:{
     	exports: '_'
    },
    backbone:{
    	deps:[ 'underscore', 'jquery'],
        exports: 'Backbone'
    },
    jquery: {
    	exports: '$'
    }
  },
  waitSeconds: 30
});
 
require(['app'], function (App) {
  'use strict';

  App.initialize();
});
