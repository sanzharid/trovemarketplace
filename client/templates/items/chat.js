Template.chat.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var itemId = FlowRouter.getParam('itemId');
    self.subscribe('messages', itemId);
  });
});

Template.chat.helpers({
  messages: function() {
    var messages = Messages.find({}, {sort: {createdAt: 1} });
    return messages;
  }
});

Template.chat.events({
  'submit form': function(event, template) {
    event.preventDefault();

    var message = {
      text: event.target.message.value,
      itemId: FlowRouter.getParam('itemId')
    }

    if (message.text != "") {
      Meteor.call('newMessage', message, function(error, result) {
        if (error)
          return alert("You can't send an empty message bruh.");
        event.target.message.value = "";
      });
    }
  }
});
