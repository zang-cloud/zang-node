'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef ConferenceStatus
 * @enum {string}
 */
const values = {
    INIT: 'init',
    IN_PROGRESS: 'in-progress',
    COMPLETED: 'completed'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;