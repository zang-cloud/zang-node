'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef PhoneNumberType
 * @enum {string}
 */
const values = {
    LOCAL: 'local',
    INTERNATIONAL: 'international',
    TOLL_FREE: 'toll-free'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;