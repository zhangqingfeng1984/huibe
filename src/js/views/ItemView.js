define(function(require, exports){
    var $ = require('jquery');
    var Backbone = require('backbone');
    var tmp = require('text!views/item.html');
    var _ = require('underscore');

    var ItemView = Backbone.View.extend({
        
        template: _.template(tmp),

        initialize: function () {
            console.log('item view init')
        },
        render: function () {
            var html = this.template({data:[{name:'qq'},{name:'bb'}]});
            this.$el.append(html);
            return this;
        }
    });
    return ItemView;
});