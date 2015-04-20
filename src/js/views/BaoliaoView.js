define(
    function (require, exports) {
        var Backbone = require('backbone');
        var T = require('text!views/BaoliaoView.tmpl.html');
        var _ = require('underscore');

        var BaoliaoView = Backbone.View.extend({
            initialize: function () {
              
            },
            render: function () {
               this.$el.append(_.template(T));
               return this;
            }
        });
        return BaoliaoView;
    }
);