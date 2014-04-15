define(['jquery', 'underscore', 'backbone', 'HomeView'], function($, _, Backbone, HomeView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			"": "index"
		},
		index: function() {
			this.homeView = new HomeView({el:'#main'});	
			this.homeView.render();
		}
	});

	var initialize = function() {
		var router = new AppRouter;
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});
