'use strict';
const utils = require('./enum-utils');

/**
 * @module @avaya/cpaas/enums/rejectreason
 */

/**
 * @readonly
 * @enum {string}
 */
const RejectReason = {
    BUSY: 'busy',
    REJECTED: 'rejected'
};

const reverseMap = utils.reverseMap(RejectReason);

RejectReason.forValue = function (value) {
    return reverseMap[value];
};

module.exports = RejectReason;