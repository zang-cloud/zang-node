'use strict';
const utils = require('./enum-utils');

/**
 * @module zang-node/enums/conferencestatus
 */

/**
 * @readonly
 * @enum {string}
 */
const ConferenceStatus = {
    INIT: 'init',
    IN_PROGRESS: 'in-progress',
    COMPLETED: 'completed'
};

const reverseMap = utils.reverseMap(ConferenceStatus);

ConferenceStatus.forValue = function(value) {
    return reverseMap[value];
};

module.exports = ConferenceStatus;