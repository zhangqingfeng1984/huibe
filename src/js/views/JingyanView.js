define(
    function (require, exports) {
        var Backbone = require('backbone');
        var T = require('text!views/JingyanView.tmpl.html');
        var _ = require('underscore');

        var JingyanView = Backbone.View.extend({
            initialize: function () {
              
            },
            render: function () {
               this.$el.append(_.template(T));
               return this;
            }
        });
        return JingyanView;
    }
);