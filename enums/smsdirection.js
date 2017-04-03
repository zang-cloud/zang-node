'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef SmsDirection
 * @enum {string}
 */
const values = {
    OUTBOUND_API: 'outbound-api',
    INCOMING: 'incoming',
    OUTBOUND_CALL: 'outbound-call',
    OUTBOUND_REPLY: 'outbound-reply'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;