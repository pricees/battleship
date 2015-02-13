App.Templates["item-template"] = " \
  <h1>Hello <%= something %></h1> \
";

App.Templates["board"] = "<table><%= row_markup %></table>";
App.Templates["board-row"] = function(row, y) {
  var html = "<tr>";
  for(var i = 0; i < row; i++) {
    html += "<td id=\"board-" + i + "-" + y + "\" data-x=\"" + i + "\" data-y=\"" + y + "\"><%= row[" + i + "] || 'X' %></td>";
  }
  html += "</tr>";
  return html;
}
