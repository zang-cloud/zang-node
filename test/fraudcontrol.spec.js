'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).fraudControl;

describe('FraudControlTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('listFraudControlResources', function () {
        it('should return a list of fraud control rules', function () {
            return connector.listFraudControlResources({
                page: 0,
                pageSize: 22
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('blockDestination', function () {
        it('should return a fraud control rule', function () {
            return connector.blockDestination({
                countryCode: 'HR',
                mobileEnabled: false,
                landlineEnabled: true,
                smsEnabled: false
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('authorizeDestination', function () {
        it('should return a fraud control rule', function () {
            return connector.authorizeDestination({
                countryCode: 'HR',
                mobileEnabled: false,
                landlineEnabled: true,
                smsEnabled: false
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('extendDestinationAuthorization', function () {
        it('should return a fraud control rule', function () {
            return connector.extendDestinationAuthorization({
                countryCode: 'HR'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('whitelistDestination', function () {
        it('should return a fraud control rule', function () {
            return connector.whitelistDestination({
                countryCode: 'HR',
                mobileEnabled: false,
                landlineEnabled: true,
                smsEnabled: false
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

});



