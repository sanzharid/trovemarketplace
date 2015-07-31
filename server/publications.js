// Rework publications into separate files per Collection.

Meteor.publish('items', function() {
  return Items.find({});
});

Meteor.publish('singleItem', function(itemId) {
  check(itemId, String);
  return Items.find({_id: itemId});
});

Meteor.publish('messages', function(itemId) {
  check(itemId, String);
  return Messages.find({itemId: itemId});
});

Meteor.methods({
  newItem: function (item) {
    var user = Meteor.user();
    var itemRecord = _.extend(item, {
      userId: user._id, 
      owner: user.profile.name, 
      createdAt: new Date()
    });

    check(itemRecord, {
      name: String,
      price: Number,
      description: String,
      userId: String,
      owner: String,
      createdAt: Date
    });

    
    var itemId = Items.insert(itemRecord);
    return { _id: itemId };
  },
  newMessage: function (message) {
    var user = Meteor.user();
    var messageRecord = _.extend(message, {
      userId: user._id, 
      owner: user.profile.name, 
      createdAt: new Date()
    });

    check(messageRecord, {
      text: String,
      itemId: String,
      userId: String,
      owner: String,
      createdAt: Date
    });

    
    var messageId = Messages.insert(messageRecord);
    return { _id: messageId };
  }
});