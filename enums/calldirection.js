'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef CallDirection
 * @enum {string}
 */
const values = {
    INBOUND: 'inbound',
    OUTBOUND_API: 'outbound-api',
    OUTBOUND_DIAL: 'outbound-dial'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;