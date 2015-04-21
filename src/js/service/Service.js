define(
    function (require, exports) {
        var $ = require('jquery');
        var BAOLIAO_URL = '/src/js/mockdata/baoliao.json';
        var SHAIDAN_URL = '/xservice/shaidan/json';

        function Service() {

        }

        Service.prototype = {
            listAll: function (successCallback, failCallback) {
                var url = this.getServiceURL();
                $.ajax({
                    url: url,
                    method: 'get',
                    dataType: 'json',
                    success: successCallback,
                    error: successCallback
                });
            },
            search: function (creteria, successCallback, failCallback) {
                var url = this.getServiceURL();
                $.ajax({
                    url: url,
                    method: 'post',
                    data: creteria,
                    success: successCallback,
                    error: successCallback
                });
            },
            batchRenling: function (arrIDs) {

            },
            batchFengpei: function (arrIDs) {

            },
            batchFeiqi: function (arrIDs) {

            },
            getServiceURL: function () {
                return BAOLIAO_URL;
            }
        }

        var instance = new Service();
        return instance;
    }
);