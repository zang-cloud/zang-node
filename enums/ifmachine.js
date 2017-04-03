'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef IfMachine
 * @enum {string}
 */
const values = {
    CONTINUE: 'continue',
    REDIRECT: 'redirect',
    HANGUP: 'hangup'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;