if (Meteor.isClient) {

    Template.navigation.helpers({
        
        brand: 'jsCow - Node Editor - Demo',
        
        items: function () {
            return [
                { title: 'Home', url: '/', attributes: { class: 'active' } },
                { title: 'Contact', url: '/contact' }
            ]; 
        }
        
    });
    
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
