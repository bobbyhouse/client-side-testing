define(['backbone', 'hbs!tmpl/item/truckItemView-tmpl'],

        function(Backbone, Template) {

            return Backbone.Marionette.ItemView.extend({
                template: Template
            });
});
