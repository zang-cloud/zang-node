'use strict';
const _ = require('lodash');
const moment = require('moment');

module.exports = {
    prepareParams: function (params) {
        if (!params) return {};
        let toDelete = ['accountSid'];
        let ret = _.clone(params);
        _.forEach(ret, function (value, key) {
            if (value && value instanceof Date) {
                let formattedDate = moment(value).format('YYYY-MM-DD');
                if (_.endsWith(key, 'Gte')) {
                    toDelete.push(key);
                    ret[key.substring(0, key.length - 3) + '>'] = formattedDate;
                } else if (_.endsWith(key, 'Lt')) {
                    toDelete.push(key);
                    ret[key.substring(0, key.length - 2) + '<'] = formattedDate;
                } else {
                    ret[key] = formattedDate;
                }
            }
            if (value === undefined || value === null) {
                toDelete.push(key);
            }
        });
        toDelete.forEach(prop => delete ret[prop]);
        return ret;
    }
};