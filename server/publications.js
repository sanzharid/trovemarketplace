Meteor.publish('items', function() {
  return Items.find({});
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
  }
});