'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef AvailableNumberType
 * @enum {string}
 */
const values = {
    LOCAL: 'Local',
    TOLLFREE: 'Tollfree'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;