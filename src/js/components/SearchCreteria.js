define(
    function (require, exports) {
        var $ = require('jquery');
        var T = require('text!components/SearchCreteria.tmpl.html');
        var Backbone = require('backbone');
        var _ = require('underscore');

        var SearchCreteria = Backbone.View.extend({
            initialize: function (options) {
                console.log('SearchCreteria view init')
            },
            render: function () {
                console.log('SearchCreteria view render')
                this.$el.append(_.template(T));
                return this;
            }
        });

        return SearchCreteria;
    }
);