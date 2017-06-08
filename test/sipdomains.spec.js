'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).sipDomains;

describe('SipDomainsTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('viewDomain', function () {
        it('should return a domain', function () {
            return connector.viewDomain({
                domainSid: 'TestDomainSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listDomains', function () {
        it('should return a list of domains', function () {
            return connector.listDomains({
                page: 0,
                pageSize: 10
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('createDomain', function () {
        it('should return a domain', function () {
            return connector.createDomain({
                accountSid: 'TestAccountSid',
                domainName: 'mydomain.com',
                friendlyName: 'MyDomain',
                voiceUrl: 'VoiceUrl',
                voiceMethod: enums.HttpMethod.POST,
                voiceFallbackUrl: 'VoiceFallbackUrl',
                voiceFallbackMethod: enums.HttpMethod.GET,
                heartbeatUrl: 'HeartbeatUrl',
                heartbeatMethod: enums.HttpMethod.POST,
                voiceStatusCallback: 'VoiceStatusCallback',
                voiceStatusCallbackMethod: enums.HttpMethod.GET
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('updateDomain', function () {
        it('should return a domain', function () {
            return connector.updateDomain({
                accountSid: 'TestAccountSid',
                domainSid: 'TestDomainSid',
                friendlyName: 'MyDomain',
                voiceUrl: 'VoiceUrl',
                voiceMethod: enums.HttpMethod.POST,
                voiceFallbackUrl: 'VoiceFallbackUrl',
                voiceFallbackMethod: enums.HttpMethod.GET,
                heartbeatUrl: 'HeartbeatUrl',
                heartbeatMethod: enums.HttpMethod.POST,
                voiceStatusCallback: 'VoiceStatusCallback',
                voiceStatusCallbackMethod: enums.HttpMethod.GET
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('deleteDomain', function () {
        it('should return a domain', function () {
            return connector.deleteDomain({
                domainSid: 'TestDomainSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listMappedCredentialsList', function () {
        it('should return a list of credentials lists', function () {
            return connector.listMappedCredentialsLists({
                domainSid: 'TestDomainSid',
                page: 0,
                pageSize: 10
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('mapCredentialsList', function () {
        it('should return a credentials list', function () {
            return connector.mapCredentialsList({
                domainSid: 'TestDomainSid',
                credentialListSid: 'TestCredentialsListSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('deleteMappedCredentialsList', function () {
        it('should return a credentials list', function () {
            return connector.deleteMappedCredentialsList({
                domainSid: 'TestDomainSid',
                credentialsListSid: 'TestCredentialsListSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listMappedIpAcls', function () {
        it('should return a list of access control lists', function () {
            return connector.listMappedIpAccessControlLists({
                domainSid: 'TestDomainSid',
                page: 0,
                pageSize: 10
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('mapIpAcl', function () {
        it('should return an access control list', function () {
            return connector.mapIpAccessControlList({
                domainSid: 'TestDomainSid',
                ipAccessControlListSid: 'TestIpAccessControlListSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('deleteIpAcl', function () {
        it('should return an access control list', function () {
            return connector.deleteMappedIpAccessControlList({
                domainSid: 'TestDomainSid',
                accessControlListSid: 'TestIpAccessControlListSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

});



