define(['backbone', 'backbone.localStorage'],

        function(Backbone, LocalStorage, TruckModel) {

            return Backbone.Collection.extend({

                localStorage: new Backbone.LocalStorage('trucks'),

                model: Backbone.Model
            });
});
