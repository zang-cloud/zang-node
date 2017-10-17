'use strict';
const utils = require('./enum-utils');

/**
 * @module zang-node/enums/transcriptionquality
 */

/**
 * @readonly
 * @enum {string}
 */
const TranscriptionQuality = {
    AUTO: 'auto',
    HYBRID: 'hybrid',
    KEYWORDS: 'keywords'
};

const reverseMap = utils.reverseMap(TranscriptionQuality);

TranscriptionQuality.forValue = function(value) {
    return reverseMap[value];
};

module.exports = TranscriptionQuality;