'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).sms;

describe('SmsTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('viewSms', function () {
        it('should return an SMS message', function () {
            return connector.viewSmsMessage({
                smsMessageSid: 'TestSmsSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });
    describe('listSms', function () {
        it('should return a list of SMS messages', function () {
            return connector.listSmsMessages({
                to: '+123456',
                from: null,
                dateSentGte: null,
                dateSentLt: null,
                page: 0,
                pageSize: 10
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('sendSms', function () {
        it('should return an SMS message', function () {
            return connector.sendSmsMessage({
                to: '+123456',
                from: '+654321',
                body: 'test from node',
                statusCallback: 'callback.url',
                statusCallbackMethod: enums.HttpMethod.GET,
                allowMultiple: false
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });


});



