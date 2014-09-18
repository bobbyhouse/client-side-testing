define([
    'backbone',
    'hbs!tmpl/shell'
    ],

    function(Backbone, ShellTmpl) {

        var application = {

            initialize: function() {

                var shellTemplate = ShellTmpl;

                this.DEMO = new Backbone.Marionette.Application();

                this.DEMO.addRegions({
                    content: '#reg-content'
                });

                this.DEMO.views = {};

                this.DEMO.addInitializer(function () {
                    document.body.innerHTML = shellTemplate();
                });

                this.DEMO.on('start', function() {
                    Backbone.history.start();
                });

                return this.DEMO;
            }
        };

        return application.initialize();
});
