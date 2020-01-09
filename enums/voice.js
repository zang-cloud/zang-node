'use strict';
const utils = require('./enum-utils');

/**
 * @module @avaya/cpaas/enums/voice
 */

/**
 * @readonly
 * @enum {string}
 */
const Voice = {
    FEMALE: 'female',
    MALE: 'male'
};

const reverseMap = utils.reverseMap(Voice);

Voice.forValue = function (value) {
    return reverseMap[value];
};

module.exports = Voice;