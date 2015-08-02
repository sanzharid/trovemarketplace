FlowRouter.route("/", {
  name: 'home',
  action: function(params) {
    BlazeLayout.render("layout", { content: "home"});
  }
});

FlowRouter.route("/sell-your-item", {
  name: 'createSale',
  action: function(params) {
    BlazeLayout.render("layout", { content: "createSale"});
  }
});

FlowRouter.route("/item-for-sale/:itemId", {
  name: 'itemDetail',
  action: function(params) {
    BlazeLayout.render("layout", { content: "itemDetail"});
  }
});

FlowRouter.route("/profile", {
  name: 'profile',
  action: function(params) {
    BlazeLayout.render("layout", { content: "profile"});
  }
});

FlowRouter.route("/my-items", {
  name: 'myItems',
  subscriptions: function(params, queryParams) {
    var limit, offset, page;
    page = parseInt(queryParams.page) || 0;
    limit = 12;
    offset = page * limit;
    return this.register('itemsWithSkip', Meteor.subscribe('itemsWithSkip', offset, limit));
  },
  action: function(params) {
    BlazeLayout.render("layout", { content: "myItems"});
  }
});

FlowRouter.route('/items', {
  name: 'items',
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