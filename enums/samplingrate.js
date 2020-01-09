'use strict';
const utils = require('./enum-utils');

/**
 * @module @avaya/cpaas/enums/samplingrate
 */

/**
 * @readonly
 * @enum {string}
 */
const SamplingRate = {
    SR_8000: 8000,
    SR_16000: 16000,
    SR_32000: 32000,
    SR_48000: 48000
};

const reverseMap = utils.reverseMap(SamplingRate);

SamplingRate.forValue = function (value) {
    return reverseMap[value];
};

module.exports = SamplingRate;