'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).availablePhoneNumbers;


describe('AvailablePhoneNumbersTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('listAvailablePhoneNumbers', function () {
        it('should return an application client', function () {
            return connector.listAvailablePhoneNumbers({
                country: 'HR',
                type: enums.AvailableNumberType.TOLLFREE,
                contains: '123',
                areaCode: '052',
                inRegion: 'Istria',
                inPostalCode: '52210',
                page: 0,
                pageSize: 20
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

});



