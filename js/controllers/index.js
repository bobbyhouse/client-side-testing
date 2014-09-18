define([
    'backbone',
    'application',
    'views/composite/trucksCompositeView',
    'collections/trucksCollection'
    ],

    function(Backbone, app, TrucksCompositeView, TrucksCollection) {

        return Backbone.Marionette.Controller.extend({

            showApplication: function() {

                var collection = new TrucksCollection();

                var view = new TrucksCompositeView({
                    collection: collection
                });

                collection.fetch();

                app.content.show(view);
            }
        });
});
