define(['backbone', 'hbs!tmpl/item/noTrucksItemView-tmpl'],

        function(Backbone, Template) {

            return Backbone.Marionette.ItemView.extend({
                template: Template
            });
});
