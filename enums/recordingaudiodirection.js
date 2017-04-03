'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef RecordingAudioDirection
 * @enum {string}
 */
const values = {
    IN: 'in',
    OUT: 'out',
    BOTH: 'both'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;