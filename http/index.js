'use strict';

const rp = require('request-promise');

const api = {
    request: function(config, opts) {

        return rp({
            method: opts.method,
            url: `${config.baseUrl}/Accounts/${opts.accountSid || config.accountSid}${opts.path}`,
            json: true,
            auth: {
                user: config.accountSid,
                password: config.authToken,
                sendImmediately: true
            },
            qs: opts.queryParams,
            body: opts.body
        });
    }
};

module.exports = api;