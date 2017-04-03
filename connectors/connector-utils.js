'use strict';
const _ = require('lodash');

module.exports = {
    prepareParams: function (params) {
        if (!params) return null;
        let ret = _.clone(params);
        delete ret.accountSid;
        delete ret.applicationSid;
        return ret;
    }
};