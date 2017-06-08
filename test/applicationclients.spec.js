'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).applicationClients;

describe('ApplicationClientsTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('viewApplicationClient', function () {
        it('should return an application client', function () {
            return connector.viewApplicationClient({
                applicationSid: 'TestApplicationSid',
                clientSid: 'TestApplicationClientSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listApplicationClients', function () {
        it('should list application clients', function () {
            return connector.listApplicationClients({
                accountSid: 'TestAccountSid',
                applicationSid: 'TestApplicationSid',
                page: 0,
                pageSize: 10
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('createApplicationClient', function () {
        it('should return created application client', function () {
            return connector.createApplicationClient({
                applicationSid: 'TestApplicationSid',
                nickname: 'MyApplicationClient'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });
});



