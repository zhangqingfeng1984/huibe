define(
    function (require, exports) {
        var $ = require('jquery');
        var Backbone = require('backbone');
        var T = require('text!views/BaoliaoView.tmpl.html');
        var _ = require('underscore');

        var BaoliaoView = Backbone.View.extend({
            events: {
                //search creteria
                'click submit.query': 'doSearch',

                //batch operations
                'click .btn-renling': 'batchRenling',
                'click .btn-fengpei': 'batchFengpei',
                'click .btn-feiqi': 'batchFeiqi',

                //table events
                'change table input[class=checkAll]': 'checkAll'
            },

            doSearch: function () {
                console.log('query all baoliao from server.');
                
                var title = $('input[name=title]', '.search-creteria').val();
                var category = $('select[name=category]', '.search-creteria').val();
                var status = $('select[name=status]', '.search-creteria').val();
                var source = $('select[name=source]', '.search-creteria').val();
                var param = {};
                param.title = title;
                param.category = category;
                param.status = status;
                param.source = source;
                var postParam = $.param(param);
                Backbone.trigger('baoliao:search', postParam);
            },

            batchRenling: function () { //批量认领
                console.log('click')
            },

            batchFengPei: function () { //批量分配

            },

            batchFeiqi: function () { //批量废弃

            },

            checkAll: function (e) {
                var checkbox = $(e.currentTarget);
                var isChecked = checkbox.prop('checked');
                this.$el.find('input[type=checkbox]').prop('checked', isChecked);
            },

            initialize: function (options) {
               console.log(options.data);
               this.data = options.data;
            },
            initEvents: function () {
                this.on('click', '')
            },
            render: function () {
               this.$el.append(_.template(T)(this.data));
               return this;
            }
        });
        return BaoliaoView;
    }
);