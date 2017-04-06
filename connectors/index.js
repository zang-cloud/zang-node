'use strict';

const accountsConnector = require('./accounts-connector');
const applicationClientsConnector = require('./applicationclients-connector');
const applicationsConnector = require('./applications-connector');
const availablePhoneNumbersConnector = require('./availablephonenumbers-connector');
const callsConnector = require('./calls-connector');
const carrierServicesConnector = require('./carrierservices-connector');
const conferencesConnector = require('./conferences-connector');
const fraudControlConnector = require('./fraudcontrol-connector');
const transcriptionsConnector = require('./transcriptions-connector');
const usagesConnector = require('./usages-connector');

const Factory = function Factory(configuration) {
    if (configuration) {
        this.accounts = new module.exports.Accounts(configuration);
        this.applicationClients = new module.exports.ApplicationClients(configuration);
        this.applications = new module.exports.Applications(configuration);
        this.availablePhoneNumbers = new module.exports.AvailablePhoneNumbers(configuration);
        this.calls = new module.exports.Calls(configuration);
        this.carrierservices = new module.exports.CarrierServices(configuration);
        this.conferencesConnector = new module.exports.Conferences(configuration);
        this.fraudControlConnector = new module.exports.FraudControl(configuration);
        this.transcriptions = new module.exports.Transcriptions(configuration);
        this.usages = new module.exports.Usages(configuration);
    }
};

module.exports = {
    Factory: Factory,
    Accounts: function Accounts(configuration) {
        return new accountsConnector(configuration);
    },
    ApplicationClients: function ApplicationClients(configuration) {
        return new applicationClientsConnector(configuration);
    },
    Applications: function Applications(configuration) {
        return new applicationsConnector(configuration);
    },
    AvailablePhoneNumbers: function AvailablePhoneNumbers(configuration) {
        return new availablePhoneNumbersConnector(configuration);
    },
    Calls: function Calls(configuration) {
        return new callsConnector(configuration);
    },
    CarrierServices: function CarrierServices(configuration) {
        return new carrierServicesConnector(configuration);
    },
    Conferences: function Conferences(configuration) {
        return new conferencesConnector(configuration);
    },
    FraudControl: function FraudControl(configuration) {
        return new fraudControlConnector(configuration);
    },
    Transcriptions: function Transcriptions(configuration) {
        return new transcriptionsConnector(configuration);
    },
    Usages: function Usages(configuration) {
        return new usagesConnector(configuration);
    }
};