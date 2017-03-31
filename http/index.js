'use strict';

const rp = require('request-promise');
const changeCase = require('change-case');
const _ = require('lodash');

const api = {
    request: function (config, opts) {
        let qs = undefined;
        if (opts.queryParams) {
            qs = _.mapKeys(opts.queryParams, (value, key) => changeCase.pascal(key));
        }

        let body = undefined;
        if (opts.body) {
            body = _.mapKeys(opts.body, (value, key) => changeCase.pascal(key));
        }

        let requestParameters = {
            method: opts.method || 'GET',
            url: `${config.baseUrl}/Accounts/${opts.accountSid || config.accountSid}${opts.path}`,
            json: true,
            auth: {
                user: config.accountSid,
                password: config.authToken,
                sendImmediately: true
            },
            qs,
            body
        };
        return rp(requestParameters);
    }
};

module.exports = api;