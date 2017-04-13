'use strict';
const utils = require('./enum-utils');

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