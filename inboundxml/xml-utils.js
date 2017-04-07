'use strict';
/**
 * @module
 */

const _ = require('lodash');

module.exports = {
    prepareParams: function (params) {
        if (!params) return null;
        return _.clone(params);
    }
};