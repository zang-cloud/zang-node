'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef RejectReason
 * @enum {string}
 */
const values = {
    BUSY: 'busy',
    REJECTED: 'rejected'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function (value) {
    return reverseMap[value];
};

module.exports = values;