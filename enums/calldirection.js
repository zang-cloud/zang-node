'use strict';
const utils = require('./enum-utils');

/**
 * @module @avaya/cpaas/enums/calldirection
 */

/**
 * @readonly
 * @enum {string}
 */
const CallDirection = {
    INBOUND: 'inbound',
    OUTBOUND_API: 'outbound-api',
    OUTBOUND_DIAL: 'outbound-dial'
};

const reverseMap = utils.reverseMap(CallDirection);

CallDirection.forValue = function(value) {
    return reverseMap[value];
};

module.exports = CallDirection;