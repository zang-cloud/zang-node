'use strict';

/**
 * Avaya CPaaS helper APIs for Node.js
 * @module @avaya/cpaas
 */

/**
 * Contains helper functions used for creating InboundXML documents.
 * @static
 * @see module:@avaya/cpaas/inboundxml
 */
module.exports.inboundXml = require('./inboundxml');
/**
 * Contains various enums used when communicating with the Avaya CPaaS API.
 * @static
 * @see module:@avaya/cpaas/enums
 */
module.exports.enums = require('./enums');

/**
 * Creates a Connectors object which contains all of the specific connectors.
 * @static
 * @type {Connectors}
 * @see module:@avaya/cpaas/connectors
 */
module.exports.Connectors = require('./connectors');

/** @type {AccountsConnector} */
module.exports.AccountsConnector = require('./connectors/accounts-connector');
/** @type {ApplicationClientsConnector} */
module.exports.ApplicationClientsConnector = require('./connectors/applicationclients-connector');
/** @type {ApplicationsConnector} */
module.exports.ApplicationsConnector = require('./connectors/applicationclients-connector');
/** @type {AvailablePhoneNumbersConnector} */
module.exports.AvailablePhoneNumbersConnector = require('./connectors/availablephonenumbers-connector');
/** @type {CallsConnector} */
module.exports.CallsConnector = require('./connectors/calls-connector');
/** @type {CarrierServicesConnector} */
module.exports.CarrierServicesConnector = require('./connectors/carrierservices-connector');
/** @type {ConferencesConnector} */
module.exports.ConferencesConnector = require('./connectors/conferences-connector');
/** @type {FraudControlConnector} */
module.exports.FraudControlConnector = require('./connectors/fraudcontrol-connector');
/** @type {IncomingPhoneNumbersConnector} */
module.exports.IncomingPhoneNumbersConnector = require('./connectors/incomingphonenumbers-connector');
/** @type {Mms  Connector} */
module.exports.MmsConnector = require('./connectors/mms-connector');
/** @type {NotificationsConnector} */
module.exports.NotificationsConnector = require('./connectors/notifications-connector');
/** @type {RecordingsConnector} */
module.exports.RecordingsConnector = require('./connectors/recordings-connector');
/** @type {SipCredentialsConnector} */
module.exports.SipCredentialsConnector = require('./connectors/sipcredentials-connector');
/** @type {SipDomainsConnector} */
module.exports.SipDomainsConnector = require('./connectors/sipdomains-connector');
/** @type {SipIpAccessControlListsConnector} */
module.exports.SipIpAccessControlListsConnector = require('./connectors/sipipaccesscontrollists-connector');
/** @type {SmsConnector} */
module.exports.SmsConnector = require('./connectors/sms-connector');
/** @type {TranscriptionsConnector} */
module.exports.TranscriptionsConnector = require('./connectors/transcriptions-connector');
/** @type {UsagesConnector} */
module.exports.UsagesConnector = require('./connectors/usages-connector');