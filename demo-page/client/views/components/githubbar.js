if (Meteor.isClient) {

    Template.githubbar.helpers({
        
        text: 'Looks the interface to edit or manipulate processes with help of nodes.',
        linkText: 'Download here!',
        linkUrl: 'https://github.com/jsCow/jscow-node-editor'
        
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
