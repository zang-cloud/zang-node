'use strict';
const utils = require('./enum-utils');

/**
 * @module @avaya/cpaas/enums/smsdirection
 */

/**
 * @readonly
 * @enum {string}
 */
const SmsDirection = {
    OUTBOUND_API: 'outbound-api',
    INCOMING: 'incoming',
    OUTBOUND_CALL: 'outbound-call',
    OUTBOUND_REPLY: 'outbound-reply'
};

const reverseMap = utils.reverseMap(SmsDirection);

SmsDirection.forValue = function(value) {
    return reverseMap[value];
};

module.exports = SmsDirection;