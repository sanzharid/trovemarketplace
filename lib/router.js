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

FlowRouter.route("/items", {
  action: function(params) {
    BlazeLayout.render("layout", { content: "itemsList"})
  }
});