define(
    function(require, exports) {
        var $ = require('jquery');
        var Backbone = require('backbone');
        var _ = require('underscore');
        var Baoliao = require('models/Baoliao');
        var BaoliaoView = require('views/BaoliaoView');
        var ShaidanView = require('views/ShaidanView');
        var JingyanView = require('views/JingyanView');

        var service = require('service/Service');

        var currentView = null;

        var HuiBeRouter = Backbone.Router.extend({

            routes: {
                "": "myBaoliaoPage",
                "baoliao": "baoliaoPage",
                "shaidan": "shaidanPage",
                "jingyan": "jingyanPage",
                "shenghe": "shenghePage"
            },

            initialize: function () {
                

                Backbone.on('baoliao:search', function(param) {
                    console.log("controller receive search event from baoliao");
                    console.log(param);
                    //service layer pull remote data and update BaoliaoView
                    //currentView.updateTable(data);
                });
            },

            defaultView: function(){
                console.log("backbone go to default view");
              
            },

            myBaoliaoPage: function () {
               
                if (currentView) {
                    currentView.remove();
                }

                var baoliaoList = [];
                service.listAll(function (result) {
                    console.log('data from server:' + result);
                    for (var i=0; i<3; i++) {
                        var baoliao = new Baoliao({
                            source: '亚马逊',
                            link: 'http://www.amazon.cn/dp/bool?t=100',
                            title: 'Fisher Price发水电费水电费',
                            price: 200,
                            category: '玩具',
                            image: '/src/images/product.jpg',
                            recommandReason: '阿萨德方法大是大非',
                            otherlink: 'http://amazon.com/dp/bool?c=1&d=2',
                            user: 'angle',
                            date: '12:23 2014/12/11',
                            status: '待分配',
                            mark: ''
                        });
                        baoliaoList.push(baoliao);
                    }
                    currentView = new BaoliaoView({data: baoliaoList});
                    $('#page').append(currentView.render().$el);
                }, function (error) {
                    console.log('Exception:' + error);
                });
            },

            baoliaoPage: function(){
                console.log("backbone go to baoliao view");
                $('.container:first').find('li').removeClass('active-page');
                $('.container:first').find('li:first').addClass('active-page');
                if (currentView) {
                    currentView.remove();
                }

                var baoliaoList = [];
                service.listAll(function (result) {
                    console.log('data from server:' + result);
                    for (var i=0; i<3; i++) {
                        var baoliao = new Baoliao({
                            source: '亚马逊',
                            link: 'http://www.amazon.cn/dp/bool?t=100',
                            title: 'Fisher Price发水电费水电费',
                            price: 200,
                            category: '玩具',
                            image: '/src/images/product.jpg',
                            recommandReason: '阿萨德方法大是大非',
                            otherlink: 'http://amazon.com/dp/bool?c=1&d=2',
                            user: 'angle',
                            date: '12:23 2014/12/11',
                            status: '待分配',
                            mark: ''
                        });
                        baoliaoList.push(baoliao);
                    }
                    currentView = new BaoliaoView({data: baoliaoList});
                    $('#page').append(currentView.render().$el);
                }, function (error) {
                    console.log('Exception:' + error);
                });

                //currentView = new BaoliaoView();
                //$('#page').append(currentView.render().$el);
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