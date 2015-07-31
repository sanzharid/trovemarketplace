FlowRouter.route('/', {
  action: function(params) {
    BlazeLayout.render("layout", { content: 'home'});
  }
});

FlowRouter.route('/sell-your-item', {
  action: function(params) {
    BlazeLayout.render("layout", { content: 'createSale'});
  }
});