'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef AuthType
 * @enum {string}
 */
const values = {
    IP_ACL: 'IP_ACL',
    CREDENTIAL_LIST: 'CREDENTIAL_LIST'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;