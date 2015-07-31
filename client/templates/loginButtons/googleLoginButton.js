Template.googleLoginButton.events({
  'click #google-login': function(event) {
    Meteor.loginWithGoogle({}, function(err){
      if (err) {
        throw new Meteor.Error("Facebook login failed");
      }
    });
  }
});
