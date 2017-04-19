'use strict';
const utils = require('./enum-utils');

/**
 * @module zang-node/enums/audiodirection
 */

/**
 * @readonly
 * @enum {string}
 */
const AudioDirection = {
    IN: 'in',
    OUT: 'out'
};

const reverseMap = utils.reverseMap(AudioDirection);

AudioDirection.forValue = function(value) {
    return reverseMap[value];
};

module.exports = AudioDirection;