'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef RecordingFileFormat
 * @enum {string}
 */
const values = {
    MP3: 'mp3',
    WAV: 'wav'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;