define(['backbone',
        'collections/trucksCollection',
        'hbs!tmpl/composite/trucksCompositeView-tmpl',
        'views/item/truckItemView',
        'views/item/noTrucksItemView',
        ],

        function(Backbone, Trucks, Template, TruckView, NoTrucksItemView) {

            return Backbone.Marionette.CompositeView.extend({

                model: new Backbone.Model(),

                template: Template,

                childView: TruckView,

                childViewContainer: '#js-monster-trucks',

                emptyView: NoTrucksItemView,

                ui: {
                    nameInput: '.js-truck-name',
                    submitButton: '.js-truck-submit'
                },

                events: {
                    'click @ui.submitButton': 'createNewTruck',
                    'keypress @ui.nameInput': 'keyPressSubmit'
                },

                keyPressSubmit: function(e) {
                    if(e.keyCode !== 13) return;
                    this.createNewTruck();
                },

                createNewTruck: function() {
                    var name = this.ui.nameInput.val();
                    this.collection.create({name: name});
                    this.ui.nameInput.val('');
                }
            });
});
