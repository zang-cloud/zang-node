'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef AudioDirection
 * @enum {string}
 */
const values = {
    IN: 'in',
    OUT: 'out'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;