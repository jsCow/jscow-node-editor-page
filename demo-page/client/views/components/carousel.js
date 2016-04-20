if (Meteor.isClient) {

    Template.carousel.helpers({
        
        carouselID: 'homeCarousel',
        
        items: [
            {
                title: 'jsCow Node Editor', 
                subtitle: 'An application for an independend process editor.', 
                route: '/',
                imgsrc: '/img/slides/1.jpg',
                status: 'active'
            },
            {
                title: 'Nodes and Connections', 
                subtitle: 'A node represents a step of a process.', 
                route: '/',
                imgsrc: '/img/slides/2.jpg',
                status: ''
            }
        ]
        
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
