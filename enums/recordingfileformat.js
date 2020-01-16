'use strict';
const utils = require('./enum-utils');

/**
 * @module @avaya/cpaas/enums/recordingfileformat
 */

/**
 * @readonly
 * @enum {string}
 */
const RecordingFileFormat = {
    MP3: 'mp3',
    WAV: 'wav'
};

const reverseMap = utils.reverseMap(RecordingFileFormat);

RecordingFileFormat.forValue = function(value) {
    return reverseMap[value];
};

module.exports = RecordingFileFormat;