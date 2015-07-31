Template.twitterLoginButton.events({
  'click #twitter-login': function(event) {
    Meteor.loginWithTwitter({}, function(err){
      if (err) {
        throw new Meteor.Error("Twitter login failed");
      }
    });
  }
});
