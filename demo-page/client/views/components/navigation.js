if (Meteor.isClient) {

    Template.navigation.helpers({

        brand: 'jsCow - Node Editor - Demo',

        items: function () {
            return [
                { title: 'Home', route: 'home', attributes: { class: 'active' } },
                { title: 'Readme', route: 'readme', attributes: {} },
                { title: 'Contact', route: 'contact', attributes: {} }
            ];
        }
        
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
