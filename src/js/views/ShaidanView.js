define(
    function (require, exports) {
        var Backbone = require('backbone');
        var T = require('text!views/ShaidanView.tmpl.html');
        var _ = require('underscore');

        var ShaidanView = Backbone.View.extend({
            initialize: function () {
              
            },
            render: function () {
               this.$el.append(_.template(T));
               return this;
            }
        });
        return ShaidanView;
    }
);