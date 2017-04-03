'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef FraudControlType
 * @enum {string}
 */
const values = {
    BLOCKED: 'BLOCKED',
    AUTHORIZED: 'AUTHORIZED',
    WHITELISTED: 'WHITELISTED'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;