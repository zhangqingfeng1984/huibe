define(
    function (require, exports) {
        var $ = require('jquery');
        var T = require('text!views/AppView.tmpl.html');
        var Backbone = require('backbone');
        var _ = require('underscore');
        var SearchCreteria = require('components/SearchCreteria');
        var html = $(T);
        var search;

        var AppView = Backbone.View.extend({
            initialize: function () {
                search = new SearchCreteria({el: $('.search-creteria', html)});
                //search.render();
            },
            render: function () {
                search.render();
                this.$el.append(html);
                return this;
            }
        });
        return AppView;
    }
);