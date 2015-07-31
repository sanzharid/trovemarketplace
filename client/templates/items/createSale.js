Template.createSale.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('items');
  });
});

Template.createSale.onRendered(function() {
  this.$( "form" ).validate();
});

Template.createSale.events({
  'submit form': function(event, template) {
    event.preventDefault();

    var item = {
      name: event.target.name.value,
      price: parseInt(event.target.price.value, 10),
      description: event.target.description.value
    }
    Meteor.call('newItem', item, function(error, result) {
      if (error)
        return alert(error.reason);

      FlowRouter.go("/item-for-sale/" + result._id);
    });
  }
});
