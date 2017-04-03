'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef PresenceStatus
 * @enum {string}
 */
const values = {
    INIT: 'init',
    IDLE: 'idle',
    LOGGED_IN: 'loggedin',
    LOGGED_OUT: 'loggedout'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;