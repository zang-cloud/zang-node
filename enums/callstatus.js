'use strict';
const utils = require('./enum-utils');

/**
 * @module @avaya/cpaas/enums/callstatus
 */

/**
 * @readonly
 * @enum {string}
 */
const CallStatus = {
    QUEUED: 'queued',
    RINGING: 'ringing',
    IN_PROGRESS: 'in-progress',
    COMPLETED: 'completed',
    FAILED: 'failed',
    BUSY: 'busy',
    NO_ANSWER: 'no-answer'
};

const reverseMap = utils.reverseMap(CallStatus);

CallStatus.forValue = function(value) {
    return reverseMap[value];
};

module.exports = CallStatus;