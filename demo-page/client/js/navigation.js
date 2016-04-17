if (Meteor.isClient) {

    Template.navigation.helpers({
        
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
