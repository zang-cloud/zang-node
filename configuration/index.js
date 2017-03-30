'use strict';

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
    getConfiguration: function(opts) {
        opts = opts || {};
        return _.defaults(opts, defaultConfiguration);
    }
};

module.exports = api;