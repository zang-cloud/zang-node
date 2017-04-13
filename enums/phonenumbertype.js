'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @enum {string}
 */
const PhoneNumberType = {
    LOCAL: 'local',
    INTERNATIONAL: 'international',
    TOLL_FREE: 'toll-free'
};

const reverseMap = utils.reverseMap(PhoneNumberType);

PhoneNumberType.forValue = function(value) {
    return reverseMap[value];
};

module.exports = PhoneNumberType;