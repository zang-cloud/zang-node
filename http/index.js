'use strict';

const rp = require('request-promise');
const changeCase = require('change-case');
const _ = require('lodash');

const api = {
    request: function (config, opts) {
        let qs = undefined;
        if (opts.queryParams) {
            qs = pascalCase(opts.queryParams);
        }

        let body = undefined;
        let bodyString = undefined;
        if (opts.bodyParams) {
            body = pascalCase(opts.bodyParams);
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
            headers:{},
            qs,
            body: bodyString
        };
        if (opts.method == "POST") {
            requestParameters.headers["content-type"] = "application/x-www-form-urlencoded"
        }
        return rp(requestParameters).then(function (data) {
            return JSON.parse(data);
        }).catch(function (err) {
            let errorData = null;
            if (err.error) {
                try {
                    errorData = JSON.parse(err.error);
                    errorData.innerException = err;
                } catch (e) {
                    errorData = null;
                }
            }
            if (errorData) {
                throw errorData;
            } else {
                throw err;
            }
        });
    },
    createBodyString: function (body) {
        if (!body) return undefined;
        let bodyKeys = Object.keys(body);
        bodyKeys.sort();
        let bodyVals = [];
        bodyKeys.forEach(function (key) {
            bodyVals.push(encodeURIComponent(key) + '=' + encodeURIComponent(body[key]));
        });
        return bodyVals.join('&');
    }
};

function pascalCase(params) {
    return _.mapKeys(params, (value, key) => {
        let newKey = changeCase.pascal(key);
        if (_.endsWith(key, '>')) {
            newKey += '>';
        }
        if (_.endsWith(key, '<')) {
            newKey += '<';
        }
        return newKey;
    });
}

module.exports = api;