'use strict';
const utils = require('./enum-utils');

/**
 * @module @avaya/cpaas/enums/input
 */

/**
 * @readonly
 * @enum {string}
 */
const Input = {
    SPEECH: 'speech',
    DTMF: 'dtmf',
    SPEECH_DTMF: 'speech dtmf'
};

const reverseMap = utils.reverseMap(Input);

Input.forValue = function (value) {
    return reverseMap[value];
};

module.exports = Input;