(function() {
  window.App = {
    Models: {},
    Collections: {},
    Templates: {},
    Views: {},
  };

  window.template = function(id) {
    return _.template( $('#' + id).html() );
  };
})();
