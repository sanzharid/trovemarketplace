Items = new Mongo.Collection('items');
Messages = new Mongo.Collection('messages');
Users = Meteor.users;

Users.helpers({  
  noInGameName: function() {
    return this.profile.ingameName == "" || this.profile.ingameName == undefined;
  }
});