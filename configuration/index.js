'use strict';

/**
 * @typedef {Object} APIConfiguration
 * @property {string} [baseUrl='https://api.zang.io/v2'] Avaya CPaaS API base URL
 * @property {string} accountSid Your Account SID.
 * @property {string} authToken Your Auth Token.
 */

const _ = require('lodash');

const defaultConfiguration = {
    accountSid: undefined,
    authToken: undefined,
    baseUrl: 'https://api.zang.io/v2'
};

const api = {
    getConfiguration: opts => {
        opts = opts || {};
        return _.defaults(opts, defaultConfiguration);
    }
};

module.exports = api;