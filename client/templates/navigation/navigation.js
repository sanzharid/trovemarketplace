Template.navigation.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('userStatus');
  });
});

Template.navigation.helpers({
  usersOnline: function() {
    return Counts.get('usersOnline');
  }
});

Template.navigation.events({
  'click #logout-button': function(event) {
    Meteor.logout(function(err){
      if (err) {
        throw new Meteor.Error("Logout failed");
      }
    });
  }
});