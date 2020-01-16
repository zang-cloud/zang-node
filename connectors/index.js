'use strict';

/**
 * @module @avaya/cpaas/connectors
 */

const AccountsConnector = require('./accounts-connector');
const ApplicationClientsConnector = require('./applicationclients-connector');
const ApplicationsConnector = require('./applications-connector');
const AvailablePhoneNumbersConnector = require('./availablephonenumbers-connector');
const CallsConnector = require('./calls-connector');
const CarrierServicesConnector = require('./carrierservices-connector');
const ConferencesConnector = require('./conferences-connector');
const FraudControlConnector = require('./fraudcontrol-connector');
const IncomingPhoneNumbersConnector = require('./incomingphonenumbers-connector');
const MmsConnector = require('./mms-connector');
const NotificationsConnector = require('./notifications-connector');
const RecordingsConnector = require('./recordings-connector');
const SipCredentialsConnector = require('./sipcredentials-connector');
const SipDomainsConnector = require('./sipdomains-connector');
const SipIpAccessControlListsConnector = require('./sipipaccesscontrollists-connector');
const SmsConnector = require('./sms-connector');
const TranscriptionsConnector = require('./transcriptions-connector');
const UsagesConnector = require('./usages-connector');

/**
 * Creates a Connector object which contains all of the specific connectors.
 * @param {APIConfiguration} configuration connector configuration parameters which are passed to all connectors.
 * @constructor
 */
function Connectors(configuration) {
    if (configuration) {
        /** @type {AccountsConnector} */
        this.accounts = new AccountsConnector(configuration);
        /** @type {ApplicationClientsConnector} */
        this.applicationClients = new ApplicationClientsConnector(configuration);
        /** @type {ApplicationsConnector} */
        this.applications = new ApplicationsConnector(configuration);
        /** @type {AvailablePhoneNumbersConnector} */
        this.availablePhoneNumbers = new AvailablePhoneNumbersConnector(configuration);
        /** @type {CallsConnector} */
        this.calls = new CallsConnector(configuration);
        /** @type {CarrierServicesConnector} */
        this.carrierservices = new CarrierServicesConnector(configuration);
        /** @type {ConferencesConnector} */
        this.conferences = new ConferencesConnector(configuration);
        /** @type {FraudControlConnector} */
        this.fraudControl = new FraudControlConnector(configuration);
        /** @type {IncomingPhoneNumbersConnector} */
        this.incomingPhoneNumbers = new IncomingPhoneNumbersConnector(configuration);
        /** @type {NotificationsConnector} */
        this.notifications = new NotificationsConnector(configuration);
        /** @type {NotificationsConnector} */
        this.mms = new MmsConnector(configuration);
        /** @type {RecordingsConnector} */
        this.recordings = new RecordingsConnector(configuration);
        /** @type {SipCredentialsConnector} */
        this.sipCredentials = new SipCredentialsConnector(configuration);
        /** @type {SipDomainsConnector} */
        this.sipDomains = new SipDomainsConnector(configuration);
        /** @type {SipIpAccessControlListsConnector} */
        this.sipIpAccessControlLists = new SipIpAccessControlListsConnector(configuration);
        /** @type {SmsConnector} */
        this.sms = new SmsConnector(configuration);
        /** @type {TranscriptionsConnector} */
        this.transcriptions = new TranscriptionsConnector(configuration);
        /** @type {UsagesConnector} */
        this.usages = new UsagesConnector(configuration);
    }
}

module.exports = Connectors;