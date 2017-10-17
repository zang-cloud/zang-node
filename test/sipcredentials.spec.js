'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).sipCredentials;

describe('SipCredentialsTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('viewCredentialsList', function () {
        it('should return a credentials list', function () {
            return connector.viewCredentialsList({
                credentialsListSid: 'TestCredentialsListSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listCredentialsLists', function () {
        it('should return a list of credentials lists', function () {
            return connector.listCredentialsLists({
                page: 0,
                pageSize: 10
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('createCredentialsList', function () {
        it('should return a credentials list', function () {
            return connector.createCredentialsList({
                friendlyName: 'MyCredentialsList'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('updateCredentialsList', function () {
        it('should return a credentials list', function () {
            return connector.updateCredentialsList({
                credentialsListSid: 'TestCredentialsListSid',
                friendlyName: 'NewCredentialsList'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('deleteCredentialsList', function () {
        it('should return a credentials list', function () {
            return connector.deleteCredentialsList({
                credentialsListSid: 'TestCredentialsListSid',
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('viewCredential', function () {
        it('should return a credential', function () {
            return connector.viewCredential({
                credentialsListSid: 'TestCredentialsListSid',
                credentialSid: 'TestCredentialSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listCredentials', function () {
        it('should return a list of credentials', function () {
            return connector.listCredentials({
                credentialsListSid: 'TestCredentialsListSid',
                page: 0,
                pageSize: 10
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('createCredential', function () {
        it('should return a credential', function () {
            return connector.createCredential({
                credentialsListSid: 'TestCredentialsListSid',
                username: 'username',
                password: 'password'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('updateCredential', function () {
        it('should return a credential', function () {
            return connector.updateCredential({
                credentialsListSid: 'TestCredentialsListSid',
                credentialSid: 'TestCredentialSid',
                password: 'password'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('deleteCredential', function () {
        it('should return a credential', function () {
            return connector.deleteCredential({
                credentialsListSid: 'TestCredentialsListSid',
                credentialSid: 'TestCredentialSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

});



