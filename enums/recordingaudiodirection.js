'use strict';
const utils = require('./enum-utils');

/**
 * @module @avaya/cpaas/enums/recordingaudiodirection
 */

/**
 * @readonly
 * @enum {string}
 */
const RecordingAudioDirection = {
    IN: 'in',
    OUT: 'out',
    BOTH: 'both'
};

const reverseMap = utils.reverseMap(RecordingAudioDirection);

RecordingAudioDirection.forValue = function(value) {
    return reverseMap[value];
};

module.exports = RecordingAudioDirection;