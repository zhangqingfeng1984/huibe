define(
    function (require, exports) {
        var Backbone = require('backbone');
        var STATUS = require('models/Status');
        var Baoliao = Backbone.Model.extend({
            defaults: {
                selected: false,
                source: null,
                link: null,
                title: null,
                price: null,
                category: null,
                image: null,
                recommandReason: null,
                otherLink: null,
                user: null,
                date: null,
                status: STATUS.DAI_FENGPEI,
                mark: null,
                operations: ['take', 'edit', 'reject']
            }
        });
        return Baoliao;
    }
);