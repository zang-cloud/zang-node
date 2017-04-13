'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @enum {string}
 */
const PresenceStatus = {
    INIT: 'init',
    IDLE: 'idle',
    LOGGED_IN: 'loggedin',
    LOGGED_OUT: 'loggedout'
};

const reverseMap = utils.reverseMap(PresenceStatus);

PresenceStatus.forValue = function(value) {
    return reverseMap[value];
};

module.exports = PresenceStatus;