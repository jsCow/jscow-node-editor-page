if (Meteor.isClient) {

    Template.carousel.helpers({

        items: function () {
            return [
                {
                    title: 'jsCow Node Editor', 
                    subtitle: 'An application for an independend process editor.', 
                    route: '/',
                    imgsrc: '/img/slides/1.jpg',
                    attributes: { class: 'active' } 
                }
            ];
        }
        
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
