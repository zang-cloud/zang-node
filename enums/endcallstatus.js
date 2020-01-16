'use strict';

/**
 * @module @avaya/cpaas/enums/endcallstatus
 */

const utils = require('./enum-utils');

/**
 * @readonly
 * @enum {string}
 */
const EndCallStatus = {
    CANCELED: 'canceled',
    COMPLETED: 'completed'
};

const reverseMap = utils.reverseMap(EndCallStatus);

EndCallStatus.forValue = function(value) {
    return reverseMap[value];
};

module.exports = EndCallStatus;