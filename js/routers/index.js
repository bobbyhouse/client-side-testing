define(['backbone', 'backbone.marionette', 'controllers/index'],

        function(Backbone, Marionette, Controller) {

            return Backbone.Marionette.AppRouter.extend({

                appRoutes: {
                    '': 'showApplication'
                },

                controller: new Controller()
        });
});
