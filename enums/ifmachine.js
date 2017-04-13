'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @enum {string}
 */
const IfMachine = {
    CONTINUE: 'continue',
    REDIRECT: 'redirect',
    HANGUP: 'hangup'
};

const reverseMap = utils.reverseMap(IfMachine);

IfMachine.forValue = function(value) {
    return reverseMap[value];
};

module.exports = IfMachine;