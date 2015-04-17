define(function(require, exports){
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    
    var ItemView = require('views/ItemView');

    return {
        start: function(){
            var router = Backbone.Router.extend({
                routes: {
                    "": "defaultView"
                },

                defaultView: function(){
                    console.log("backbone go to default view");
                    $(document.body).append(new ItemView().render().$el);
                }
            });
            new router();
            Backbone.history.start();
        }
    };
});