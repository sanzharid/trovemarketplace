Template.itemsList.helpers({
  items: function() {
    var items = Items.find({}, { sort: { createdAt: -1 }})
    return items;
  }
});