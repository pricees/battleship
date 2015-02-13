App.Views.Table = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.model.on("change:board", this.render, this);
  },
  events: {
    "click td": "debug",
  },
  debug: function(e) {
    var td = $(e.target)
    this.model.setMarker(td.data("y"), td.data("x"));
    this.render();
  },
  render: function() {
    var row_htmls = _.map(this.model.get("board"), function(array, index) {
      return _.template(App.Templates["board-row"](array.length, index))({row: array});
    });
    var row_markup = _.reduce(row_htmls, function(res, row_html) { return res + row_html }, "");

    html = _.template(App.Templates["board"])({ row_markup: row_markup });
    this.$el.html(html)
    return html
  }
});
