'use strict';

/**
 * @module connectors
 */

const accountsConnector = require('./accounts-connector');
const applicationClientsConnector = require('./applicationclients-connector');
const applicationsConnector = require('./applications-connector');
const availablePhoneNumbersConnector = require('./availablephonenumbers-connector');
const callsConnector = require('./calls-connector');
const carrierServicesConnector = require('./carrierservices-connector');
const conferencesConnector = require('./conferences-connector');
const fraudControlConnector = require('./fraudcontrol-connector');
const incomingPhoneNumbersConnector = require('./incomingphonenumbers-connector');
const notificationsConnector = require('./notifications-connector');
const recordingsConnector = require('./recordings-connector');
const sipCredentialsConnector = require('./sipcredentials-connector');
const sipDomainsConnector = require('./sipdomains-connector');
const sipIpAccessControlListsConnector = require('./sipipaccesscontrollists-connector');
const smsConnector = require('./sms-connector');
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
        this.conferences = new module.exports.Conferences(configuration);
        this.fraudControl = new module.exports.FraudControl(configuration);
        this.incomingPhoneNumbers = new module.exports.IncomingPhoneNumbers(configuration);
        this.notifications = new module.exports.Notifications(configuration);
        this.recordings = new module.exports.Recordings(configuration);
        this.sipCredentials = new module.exports.SipCredentials(configuration);
        this.sipDomains = new module.exports.SipDomains(configuration);
        this.sipIpAccessControlLists = new module.exports.SipIpAccessControlLists(configuration);
        this.sms = new module.exports.Sms(configuration);
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
    IncomingPhoneNumbers: function IncomingPhoneNumbers(configuration) {
        return new incomingPhoneNumbersConnector(configuration);
    },
    Notifications: function Notifications(configuration) {
        return new notificationsConnector(configuration);
    },
    Recordings: function Recordings(configuration) {
        return new recordingsConnector(configuration);
    },
    SipCredentials: function SipCredentials(configuration) {
        return new sipCredentialsConnector(configuration);
    },
    SipDomains: function SipDomains(configuration) {
        return new sipDomainsConnector(configuration);
    },
    SipIpAccessControlLists: function SipIpAccessControlLists(configuration) {
        return new sipIpAccessControlListsConnector(configuration);
    },
    Sms: function Sms(configuration) {
        return new smsConnector(configuration);
    },
    Transcriptions: function Transcriptions(configuration) {
        return new transcriptionsConnector(configuration);
    },
    Usages: function Usages(configuration) {
        return new usagesConnector(configuration);
    }
};