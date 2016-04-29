if (Meteor.isClient) {

    Template.readmeMarkdown.created = function() {
      var url =  'http://raw.githubusercontent.com/jsCow/jscow-node-editor/master/README.md';
      Meteor.call('getRemoteContent', url, function (error, result) {
        Session.set('markdownReadme', result);
      });
    },

    Template.readmeMarkdown.helpers({
      readme: function() {
        return Session.get('markdownReadme');
      }
    });
}
