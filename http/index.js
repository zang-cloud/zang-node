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
        let bodyString = undefined;
        if (opts.bodyParams) {
            body = _.mapKeys(opts.bodyParams, (value, key) => changeCase.pascal(key));
            bodyString = api.createBodyString(body);
        }

        let requestParameters = {
            method: opts.method || 'GET',
            url: `${config.baseUrl}/Accounts/${opts.accountSid || config.accountSid}${opts.path}`,
            json: false,
            auth: {
                user: config.accountSid,
                password: config.authToken,
                sendImmediately: true
            },
            qs,
            body: bodyString
        };
        return rp(requestParameters).then(function(data){
            return JSON.parse(data);
        });
    },
    createBodyString: function(body) {
        if (!body) return undefined;
        let bodyKeys = Object.keys(body);
        bodyKeys.sort();
        let bodyVals = [];
        bodyKeys.forEach(function(key){
            bodyVals.push(encodeURIComponent(key) + '=' + encodeURIComponent(body[key]));
        });
        return bodyVals.join('&');
    }
};

module.exports = api;