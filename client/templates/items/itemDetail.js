Template.itemDetail.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var itemId = FlowRouter.getParam('itemId');
    self.subscribe('singleItem', itemId);  
  });
});

Template.itemDetail.helpers({
  item: function() {
    var itemId = FlowRouter.getParam('itemId');
    var item = Items.findOne({_id: itemId}) || {};
    return item;
  }
});