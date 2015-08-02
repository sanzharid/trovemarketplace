FlowRouter.route("/", {
  action: function(params) {
    BlazeLayout.render("layout", { content: "home"});
  }
});

FlowRouter.route("/sell-your-item", {
  action: function(params) {
    BlazeLayout.render("layout", { content: "createSale"});
  }
});

FlowRouter.route("/item-for-sale/:itemId", {
  action: function(params) {
    BlazeLayout.render("layout", { content: "itemDetail"});
  }
});

FlowRouter.route('/items', {
  subscriptions: function(params, queryParams) {
    var limit, offset, page;
    page = parseInt(queryParams.page) || 0;
    limit = 12;
    offset = page * limit;
    return this.register('itemsWithSkip', Meteor.subscribe('itemsWithSkip', offset, limit));
  },
  action: function(params, queryParams) {
    BlazeLayout.render("layout", { content: "itemsList"});
  }
});