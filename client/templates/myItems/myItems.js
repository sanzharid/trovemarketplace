Template.myItems.helpers({
  items: function() {
    var items = Items.find({userId: Meteor.userId()}, { sort: { createdAt: -1 }})
    return items;
  }
});