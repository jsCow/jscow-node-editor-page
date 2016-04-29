Meteor.methods({

  getRemoteContent: function (url) {
    var content = '';
    try {
      var result = HTTP.get(url);
      content = result.content;
    } catch(e) {
      console.log('Error: ', e );
    }
    return content;
  }
});
