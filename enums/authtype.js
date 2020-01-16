'use strict';
const utils = require('./enum-utils');

/**
 * @module @avaya/cpaas/enums/authtype
 */

/**
 * @readonly
 * @enum {string}
 */
const AuthType = {
    IP_ACL: 'IP_ACL',
    CREDENTIAL_LIST: 'CREDENTIAL_LIST'
};

const reverseMap = utils.reverseMap(AuthType);

AuthType.forValue = function(value) {
    return reverseMap[value];
};

module.exports = AuthType;