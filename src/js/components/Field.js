define(function(require, exports){
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var T = require('text!components/FieldTemplate.html');

    var Field = Backbone.View.extend({
       
        template: _.template(T),

        initialize: function(options){
            
            var label = options.label || '';
            var dataProvider = options.dataProvider || [];
            var ui = $(T);
            $('select', ui).hide();
            $('label', ui).html(label);
            if (dataProvider.length){
                var select = $('select', ui);
                _.each(dataProvider, function(item){
                    $('<option>' + item + '</option>').appendTo(select);
                });
                $('select', ui).show();
            }
            this.$el.append(ui.innerHTML());
            
        }
    });
    return Field;
});