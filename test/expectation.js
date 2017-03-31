'use strict';
const nock = require('nock');
const testdefs = require('./resources/unittests.json');
const conf = require('../configuration').getConfiguration();

module.exports.create = function(ctx){
    nock.cleanAll();
    const suite = ctx.parent.title;
    const test = ctx.title;
    const testdef = testdefs[suite][test];
    const response = require(`./resources${testdef.response}`);
    const path = `/Accounts/TestAccountSid/${testdef.path}`;
    return nock(conf.baseUrl, {
        reqheaders: {
            'authorization': 'Basic VGVzdEFjY291bnRTaWQ6VGVzdFRva2Vu'
        }
    }).intercept(path, testdef.method, prepareParams(testdef.bodyParams))
        .query(prepareParams(testdef.queryParams))
        .replyWithFile(200, `${__dirname}/resources${testdef.response}`, {
            'Content-Type': 'application/json'
        })
        .log(console.log);
};

function prepareParams (params) {
    if (!params) return undefined;
    const ret = {};
    params.forEach(param => ret[param.name] = param.value);
    return ret;
}