App.Models.Table = Backbone.Model.extend({ 
  defaults: {
    "rows": 4,
    "columns": 8,
  },
  resetBoard: function() {
    var board = new Array(this.get("rows"));
    for(var i=0; i < this.get("rows"); i++) {
      board[i] = new Array(this.get("columns")).join("foo");
    }
    return board;
  },
  initialize: function() {
    this.set("board", this.resetBoard());
  },
});
