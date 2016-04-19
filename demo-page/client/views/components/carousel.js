if (Meteor.isClient) {

    Template.carousel.helpers({
        
        carouselID: 'homeCarousel',
        
        items: function () {
            return [
                {
                    title: 'jsCow Node Editor', 
                    subtitle: 'An application for an independend process editor.', 
                    route: '/',
                    imgsrc: '/img/slides/1.jpg',
                    attributes: { 
                        class: 'item active' 
                    },
                    indicatorAttributes: { 
                        'class': 'active',
                        'data-target': carouselID, 
                        'data-slide-to': 1
                    }
                },
                {
                    title: 'Nodes and Connections', 
                    subtitle: 'A node represents a step of a process.', 
                    route: '/',
                    imgsrc: '/img/slides/2.jpg',
                    attributes: { 
                        class: 'item' 
                    },
                    indicatorAttributes: {
                        'data-target': carouselID, 
                        'data-slide-to': 2
                    }
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
