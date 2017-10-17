'use strict';

const expectation = require('./expectation');
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).accounts;

describe('AccountsTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('viewAccount', function () {
        it('should return an account', function () {
            return connector.viewAccount({
                accountSid: 'TestAccountSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('updateAccount', function () {
        it('should return updated account', function () {
            return connector.updateAccount({
                friendlyName: 'friendlyname1'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });
});



