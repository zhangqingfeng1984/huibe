define(
    function (require, exports) {
        var $ = require('jquery');
        var T = require('text!components/SearchCreteria.tmpl.html');
        var Backbone = require('backbone');
        var _ = require('underscore');
        var html = $(T);
        var SearchCreteria = Backbone.View.extend({
            initialize: function (options) {
                console.log('SearchCreteria view init');
                var fields = options.fields || [];
                for (var i=0; i<fields.length; i++) {
                    var config = fields[i];
                    var label = config.label;
                    var name = config.name;
                    var fieldGroup = $('<div class="field"></div>');
                    switch(field.type) {
                        case 'input' : {
                            fieldGroup.append($('<span>' + label + '</span>'));
                            fieldGroup.append($('<input type="text" name=' + name +'>'));
                            html.append()
                            break;
                        }
                        case 'dropdown' : {
                            break;
                        }
                    }
                }
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