'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef SamplingRate
 * @enum {string}
 */
const values = {
    SR_8000: 8000,
    SR_16000: 16000,
    SR_32000: 32000,
    SR_48000: 48000
};

const reverseMap = utils.reverseMap(values);

values.forValue = function (value) {
    return reverseMap[value];
};

module.exports = values;