'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef CallStatus
 * @enum {string}
 */
const values = {
    QUEUED: 'queued',
    RINGING: 'ringing',
    IN_PROGRESS: 'in-progress',
    COMPLETED: 'completed',
    FAILED: 'failed',
    BUSY: 'busy',
    NO_ANSWER: 'no-answer'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;