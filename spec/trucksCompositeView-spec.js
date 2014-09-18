define([
        'collections/trucksCollection',
        'views/composite/trucksCompositeView'
       ],

       function(Collection, View) {

           describe('Trucks Composite View', function() {

               it('should have a view', function() {
                   expect(View).toBeDefined();
               });

               it('should have a collection', function() {
                   expect(Collection).toBeDefined();
               });
           });

           describe('When there are no trucks', function() {

               beforeEach(function() {

                   this.collection = new Collection();
                   this.view = new View({collection: this.collection});
                   this.view.render();
               });

               it('should show the no trucks view', function() {
                   expect(this.view.$('.js-empty-view').length).toEqual(1);
               });

               it('should not show any trucks', function() {
                   expect(this.view.$('.js-truck').length).toEqual(0);
               });
           });

           describe('When creating a new truck', function() {

               beforeEach(function() {
                   this.collection = new Collection();
                   this.view = new View({collection: this.collection});
                   this.view.render();

                   this.view.ui.nameInput.val('bigfoot');
                   this.view.createNewTruck();
               });

               it('should add the truck to the collection', function() {
                   expect(this.collection.length).toEqual(1);
               });

               it('should show the new truck', function() {
                   expect(this.view.$('.js-truck').length).toEqual(1);
               });

               it('should clear the input', function() {
                   expect(this.view.ui.nameInput.val()).toEqual('');
               });
           });

           describe('When hitting enter to create a new truck', function() {

               beforeEach(function() {

                   this.collection = new Collection();
                   this.view = new View({collection: this.collection});
                   this.view.render();

                   spyOn(this.view, 'createNewTruck');

                   this.e = {
                       keyCode: 13
                   };
               });

               it('should create a new truck on enter', function() {
                   this.view.keyPressSubmit(this.e);
                   expect(this.view.createNewTruck).toHaveBeenCalledWith();
               });

               it('should not create a new truck on some other key event', function() {
                   this.e.keyCode = 0;
                   this.view.keyPressSubmit(this.e);
                   expect(this.view.createNewTruck).not.toHaveBeenCalledWith();
               });
           });
});
