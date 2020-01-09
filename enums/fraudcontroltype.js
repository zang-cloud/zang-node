'use strict';

/**
 * @module @avaya/cpaas/enums/fraudcontroltype
 */

const utils = require('./enum-utils');

/**
 * @readonly
 * @enum {string}
 */
const FraudControlType = {
    BLOCKED: 'BLOCKED',
    AUTHORIZED: 'AUTHORIZED',
    WHITELISTED: 'WHITELISTED'
};

const reverseMap = utils.reverseMap(FraudControlType);

FraudControlType.forValue = function(value) {
    return reverseMap[value];
};

module.exports = FraudControlType;