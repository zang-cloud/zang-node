'use strict';

/**
 * @typedef {Object} ZangConfiguration
 * @property {string} [baseUrl='https://api.zang.io/v2'] Zang API base URL
 * @property {string} accountSid Your Account SID.
 * @property {string} authToken Your Auth Token.
 */

const _ = require('lodash');

const defaultConfiguration = {
    accountSid: undefined,
    authToken: undefined,
    baseUrl: 'https://api.zang.io/v2',
    proxyHost: undefined,
    proxyPort: undefined,
    proxyProtocol: undefined
};

const api = {
    getConfiguration: opts => {
        opts = opts || {};
        return _.defaults(opts, defaultConfiguration);
    }
};

module.exports = api;