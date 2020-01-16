'use strict';
const utils = require('./enum-utils');

/**
 * @module @avaya/cpaas/enums/loglevel
 */

/**
 * @readonly
 * @enum {string}
 */
const LogLevel = {
    ERROR: '0',
    WARNING: '1',
    INFO: '2'
};

const reverseMap = utils.reverseMap(LogLevel);

LogLevel.forValue = function(value) {
    return reverseMap[value];
};

module.exports = LogLevel;