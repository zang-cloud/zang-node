'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');
const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).applications;
const enums = require('../enums');

describe('ApplicationsTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('viewApplication', function () {
        it('should return an application', function () {
            return connector.viewApplication({
                applicationSid: 'TestApplicationSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listApplications', function () {
        it('should list applications', function () {
            return connector.listApplications({
                accountSid: 'TestAccountSid',
                friendlyName: 'TestApplication',
                page: 0,
                pageSize: 10
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('createApplication', function () {
        it('should return created application', function () {
            return connector.createApplication({
                friendlyName: 'TestApplication',
                voiceUrl: 'voiceUrl',
                voiceMethod: enums.HttpMethod.POST,
                voiceFallbackUrl: 'voiceFallbackUrl',
                voiceFallbackMethod: enums.HttpMethod.GET,
                voiceCallerIdLookup: true,
                smsUrl: 'smsUrl',
                smsMethod: enums.HttpMethod.POST,
                smsFallbackUrl: 'smsFallbackUrl',
                smsFallbackMethod: enums.HttpMethod.GET,
                heartbeatUrl: 'heartbeatUrl',
                heartbeatMethod: enums.HttpMethod.GET,
                statusCallback: 'statusCallback',
                statusCallbackMethod: enums.HttpMethod.POST,
                hangupCallback: 'hangupCallback',
                hangupCallbackMethod: enums.HttpMethod.GET
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('updateApplication', function () {
        it('should return updated application', function () {
            return connector.updateApplication({
                accountSid: 'TestAccountSid',
                applicationSid: 'TestApplicationSid',
                friendlyName: 'TestApplication',
                voiceUrl: 'voiceUrl',
                voiceMethod: enums.HttpMethod.POST,
                voiceFallbackUrl: 'voiceFallbackUrl',
                voiceFallbackMethod: enums.HttpMethod.GET,
                voiceCallerIdLookup: true,
                smsUrl: 'smsUrl',
                smsMethod: enums.HttpMethod.POST,
                smsFallbackUrl: 'smsFallbackUrl',
                smsFallbackMethod: enums.HttpMethod.GET,
                heartbeatUrl: 'heartbeatUrl',
                heartbeatMethod: enums.HttpMethod.GET,
                statusCallback: 'statusCallback',
                statusCallbackMethod: enums.HttpMethod.POST,
                hangupCallback: 'hangupCallback',
                hangupCallbackMethod: enums.HttpMethod.GET
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('deleteApplication', function () {
        it('should return a deleted application', function () {
            return connector.deleteApplication({
                applicationSid: 'TestApplicationSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });
});



