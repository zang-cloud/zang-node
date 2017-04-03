'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef TranscriptionStatus
 * @enum {string}
 */
const values = {
    COMPLETED: 'completed',
    IN_PROGRESS: 'in-progress',
    FAILED: 'failed'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;