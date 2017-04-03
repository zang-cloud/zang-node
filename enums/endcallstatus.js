'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef EndCallStatus
 * @enum {string}
 */
const values = {
    CANCELED: 'canceled',
    COMPLETED: 'completed'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;