'use strict';
const nock = require('nock');
const conf = require('../configuration').getConfiguration();
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).fraudControl;

describe('ErrorTest', function () {
    beforeEach(function () {
        return nock(conf.baseUrl, {
            reqheaders: {
                'authorization': 'Basic VGVzdEFjY291bnRTaWQ6VGVzdFRva2Vu'
            }
        }).get('/Accounts/TestAccountSid/Fraud.json?Page=0&PageSize=22')
            .replyWithFile(404, `${__dirname}/resources/error/error.json`, {
                'Content-Type': 'application/json'
            })
            .log(console.log);
    });

    describe('error', function () {
        it('should throw', function (done) {
            connector.listFraudControlResources({
                page: 0,
                pageSize: 22
            }).then(function(data){
                console.log(data);
                done('fail');
            }).catch(function(err){
                console.log(err);
                done();
            });
        })
    });


});



