'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).incomingPhoneNumbers;

describe('IncomingPhoneNumbersTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('viewIncomingPhoneNumber', function () {
        it('should return incoming phone number', function () {
            return connector.viewIncomingNumber({
                incomingPhoneNumberSid: 'TestIncomingPhoneNumberSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listIncomingPhoneNumbers', function () {
        it('should return a list of incoming phone numbers', function () {
            return connector.listIncomingNumbers({
                contains: '123',
                friendlyName: 'MyNumber',
                page: 0,
                pageSize: 25
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('purchaseIncomingPhoneNumber', function () {
        it('should return incoming phone number', function () {
            return connector.purchaseIncomingNumber({
                friendlyName: 'MyNumber',
                phoneNumber: '+1234',
                areaCode: '123',
                voiceCallerIdLookup: true,
                voiceApplicationSid: 'VoiceApplicationSid',
                smsApplicationSid: 'SmsApplicationSid',
                voiceUrl: 'VoiceUrl',
                voiceMethod: enums.HttpMethod.GET,
                voiceFallbackUrl: 'VoiceFallbackUrl',
                voiceFallbackMethod: enums.HttpMethod.GET,
                smsUrl: 'SmsUrl',
                smsMethod: enums.HttpMethod.GET,
                smsFallbackUrl: 'SmsFallbackUrl',
                smsFallbackMethod: enums.HttpMethod.POST,
                heartbeatUrl: 'HeartbeatUrl',
                heartbeatMethod: enums.HttpMethod.POST,
                statusCallback: 'StatusCallback',
                statusCallbackMethod: enums.HttpMethod.POST,
                hangupCallback: 'HangupCallback',
                hangupCallbackMethod: enums.HttpMethod.POST
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('updateIncomingPhoneNumber', function () {
        it('should return incoming phone number', function () {
            return connector.updateIncomingNumber({
                incomingPhoneNumberSid: 'TestIncomingPhoneNumberSid',
                friendlyName: 'MyNumber',
                voiceCallerIdLookup: true,
                voiceUrl: 'VoiceUrl',
                voiceMethod: enums.HttpMethod.GET,
                voiceFallbackUrl: 'VoiceFallbackUrl',
                voiceFallbackMethod: enums.HttpMethod.GET,
                smsUrl: 'SmsUrl',
                smsMethod: enums.HttpMethod.GET,
                smsFallbackUrl: 'SmsFallbackUrl',
                smsFallbackMethod: enums.HttpMethod.POST,
                heartbeatUrl: 'HeartbeatUrl',
                heartbeatMethod: enums.HttpMethod.POST,
                statusCallback: 'StatusCallback',
                statusCallbackMethod: enums.HttpMethod.POST,
                hangupCallback: 'HangupCallback',
                hangupCallbackMethod: enums.HttpMethod.POST
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('deleteIncomingPhoneNumber', function () {
        it('should return incoming phone number', function () {
            return connector.deleteIncomingNumber({
                incomingPhoneNumberSid: 'TestIncomingPhoneNumberSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

});



