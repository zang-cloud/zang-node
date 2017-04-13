'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');

const carrierServicesConnector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).carrierservices;

describe('CarrierServicesTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('carrierLookup', function () {
        it('should return a list of lookups', function () {
            return carrierServicesConnector.carrierLookup({
                phoneNumber: '+1234'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listCarrierLookups', function () {
        it('should return a list of lookups', function () {
            return carrierServicesConnector.listCarrierLookups({
                page: 0,
                pageSize: 33
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('cnamLookup', function () {
        it('should return a list of lookups', function () {
            return carrierServicesConnector.cnamLookup({
                phoneNumber: '+1234'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listCnamLookups', function () {
        it('should return a list of lookups', function () {
            return carrierServicesConnector.listCnamLookups({
                page: 0,
                pageSize: 33
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('bnaLookup', function () {
        it('should return a list of lookups', function () {
            return carrierServicesConnector.bnaLookup({
                phoneNumber: '+1234'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listBnaLookups', function () {
        it('should return a list of lookups', function () {
            return carrierServicesConnector.listBnaLookups({
                page: 0,
                pageSize: 33
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });


});



