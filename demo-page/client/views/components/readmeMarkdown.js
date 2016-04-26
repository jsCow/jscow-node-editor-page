if (Meteor.isClient) {

    Template.readmeMarkdown.helpers({
        
        readme: function() {
            
            var content = '';
            
            $.ajax({
                type: "GET",
                url: 'https://raw.githubusercontent.com/jsCow/jscow-node-editor/master/README.md',
                dataType: 'text/plain',
                contentType: 'text/plain',
                accepts: 'text/plain',
                success: function(data) {
                    content = data;
                },
                error: function(response) {
                    return content = response.responseText;
                }
            });
            
            return content;
            
        },
        
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
