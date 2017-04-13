'use strict';

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

/**
 * Creates a Connector object which contains all of the specific connectors.
 * @param {ZangConfiguration} configuration connector configuration parameters which are passed to all connectors.
 * @constructor
 */
function Connectors(configuration) {
    if (configuration) {
        /** @type {AccountsConnector} */
        this.accounts = new module.exports.Accounts(configuration);
        /** @type {ApplicationClientsConnector} */
        this.applicationClients = new module.exports.ApplicationClients(configuration);
        /** @type {ApplicationsConnector} */
        this.applications = new module.exports.Applications(configuration);
        /** @type {AvailablePhoneNumbersConnector} */
        this.availablePhoneNumbers = new module.exports.AvailablePhoneNumbers(configuration);
        /** @type {CallsConnector} */
        this.calls = new module.exports.Calls(configuration);
        /** @type {CarrierServicesConnector} */
        this.carrierservices = new module.exports.CarrierServices(configuration);
        /** @type {ConferencesConnector} */
        this.conferences = new module.exports.Conferences(configuration);
        /** @type {FraudControlConnector} */
        this.fraudControl = new module.exports.FraudControl(configuration);
        /** @type {IncomingPhoneNumbersConnector} */
        this.incomingPhoneNumbers = new module.exports.IncomingPhoneNumbers(configuration);
        /** @type {NotificationsConnector} */
        this.notifications = new module.exports.Notifications(configuration);
        /** @type {RecordingsConnector} */
        this.recordings = new module.exports.Recordings(configuration);
        /** @type {SipCredentialsConnector} */
        this.sipCredentials = new module.exports.SipCredentials(configuration);
        /** @type {SipDomainsConnector} */
        this.sipDomains = new module.exports.SipDomains(configuration);
        /** @type {SipIpAccessControlListsConnector} */
        this.sipIpAccessControlLists = new module.exports.SipIpAccessControlLists(configuration);
        /** @type {SmsConnector} */
        this.sms = new module.exports.Sms(configuration);
        /** @type {TranscriptionsConnector} */
        this.transcriptions = new module.exports.Transcriptions(configuration);
        /** @type {UsagesConnector} */
        this.usages = new module.exports.Usages(configuration);
    }
}

/** @type {AccountsConnector} */
Connectors.Accounts = accountsConnector;
/** @type {ApplicationClientsConnector} */
Connectors.ApplicationClients = applicationClientsConnector;
/** @type {ApplicationsConnector} */
Connectors.Applications = applicationsConnector;
/** @type {AvailablePhoneNumbersConnector} */
Connectors.AvailablePhoneNumbers = availablePhoneNumbersConnector;
/** @type {CallsConnector} */
Connectors.Calls = callsConnector;
/** @type {CarrierServicesConnector} */
Connectors.CarrierServices = carrierServicesConnector;
/** @type {ConferencesConnector} */
Connectors.Conferences = conferencesConnector;
/** @type {FraudControlConnector} */
Connectors.FraudControl = fraudControlConnector;
/** @type {IncomingPhoneNumbersConnector} */
Connectors.IncomingPhoneNumbers = incomingPhoneNumbersConnector;
/** @type {NotificationsConnector} */
Connectors.Notifications = notificationsConnector;
/** @type {RecordingsConnector} */
Connectors.Recordings = recordingsConnector;
/** @type {SipCredentialsConnector} */
Connectors.SipCredentials = sipCredentialsConnector;
/** @type {SipDomainsConnector} */
Connectors.SipDomains = sipDomainsConnector;
/** @type {SipIpAccessControlListsConnector} */
Connectors.SipIpAccessControlLists = sipIpAccessControlListsConnector;
/** @type {SmsConnector} */
Connectors.Sms = smsConnector;
/** @type {TranscriptionsConnector} */
Connectors.Transcriptions = transcriptionsConnector;
/** @type {UsagesConnector} */
Connectors.Usages = usagesConnector;

module.exports = Connectors;