define(
    function(require, exports) {
        var $ = require('jquery');
        var Backbone = require('backbone');
        var _ = require('underscore');
        
        var BaoliaoView = require('views/BaoliaoView');
        var ShaidanView = require('views/ShaidanView');
        var JingyanView = require('views/JingyanView');
        var currentView = null;

        var HuiBeRouter = Backbone.Router.extend({

            routes: {
                "": "baoliaoPage",
                "baoliao": "baoliaoPage",
                "shaidan": "shaidanPage",
                "jingyan": "jingyanPage",
                "shenghe": "shenghePage"
            },

            defaultView: function(){
                console.log("backbone go to default view");
              
            },

            baoliaoPage: function(){
                console.log("backbone go to baoliao view");
                $('.container:first').find('li').removeClass('active-page');
                $('.container:first').find('li:first').addClass('active-page');
                if (currentView) {
                    currentView.remove();
                }
                currentView = new BaoliaoView();
                $('#page').append(currentView.render().$el);
            },

            shaidanPage: function(){
                console.log("backbone go to shaidan view");
                $('.container:first').find('li').removeClass('active-page');
                $('.container:first').find('li:nth-child(2)').addClass('active-page');
                if (currentView) {
                    currentView.remove();
                }
                currentView = new ShaidanView();
                $('#page').append(currentView.render().$el);
            },

            jingyanPage: function(){
                console.log("backbone go to jingyan view");
                $('.container:first').find('li').removeClass('active-page');
                $('.container:first').find('li:nth-child(3)').addClass('active-page');
                if (currentView) {
                    currentView.remove();
                }
                currentView = new JingyanView();
                $('#page').append(currentView.render().$el);
            },

            shenghePage: function(){
                console.log("backbone go to shenghe view");
            },

            start: function () {
                Backbone.history.start();
            }
        });
        
        return new HuiBeRouter();
});