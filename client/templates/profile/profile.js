Template.profile.events({
  'submit form': function(event, template) {
    event.preventDefault();

    var ingameName = event.target.ingamename.value;
    Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.ingameName': ingameName }} );
    sAlert.success('In-game name saved correctly.');
  }
});