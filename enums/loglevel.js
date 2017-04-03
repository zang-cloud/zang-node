'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef LogLevel
 * @enum {string}
 */
const values = {
    ERROR: '0',
    WARNING: '1',
    INFO: '2'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;