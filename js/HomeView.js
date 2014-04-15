define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	var HomeView = Backbone.View.extend({
		template: _.template("<div data-i18n='view.name'></div>"),
		render: function() {
			this.$el.html(this.template);
		}
	});

	return HomeView;
});

