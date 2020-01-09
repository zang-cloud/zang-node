'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Incoming Phone Numbers connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function IncomingPhoneNumbersConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * Shows info on an incoming phone number.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.incomingPhoneNumberSid Incoming Number SID
     * @returns {Promise} Information about Incoming Phone Number.
     */
    this.viewIncomingNumber = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/IncomingPhoneNumbers/${params.incomingPhoneNumberSid}.json`
        });
    };

    /**
     * Shows info on all incoming numbers associated with an account
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.contains] List numbers containing certain digits.
     * @param {string} [params.friendlyName] Specifies that only IncomingPhoneNumber resources matching the input FriendlyName should be
     *                     returned in the list request.
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of Incoming Phone Numbers
     */
    this.listIncomingNumbers = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/IncomingPhoneNumbers.json`,
            queryParams
        });
    };

    /**
     * Purchases a new Incoming Phone Number
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.friendlyName] User generated name for the incoming number.
     * @param {string} [params.phoneNumber] A specific available phone number you wish to add.
     * @param {string} [params.areaCode] The area code from which a random available number will be added.
     * @param {boolean} [params.voiceCallerIdLookup] Look up the caller’s caller-ID name from the CNAM database (additional charges apply).
     * @param {string} [params.voiceApplicationSid] The SID of the Voice Application you wish to associate with this incoming number.
     * @param {string} [params.smsApplicationSid] The SID of the SMS Application you wish to associate with this incoming number.
     * @param {string} [params.voiceUrl] The URL requested once the call connects. This URL must be valid and should return InboundXML
     *                 containing instructions on how to process your call. A badly formatted Url will NOT fallback to
     *                 the FallbackUrl but return an error without placing the call. Url length is limited
     *                 to 200 characters.
     * @param {HttpMethod} [params.voiceMethod] The HTTP method used to request the URL once the call connects.
     * @param {string} [params.voiceFallbackUrl] URL used if the required URL is unavailable or if any errors occur during execution of
     *                 the InboundXML returned by the required URL. Url length is limited to 200 characters.
     * @param {HttpMethod} [params.voiceFallbackMethod] The HTTP method used to request the FallbackUrl once the call connects.
     * @param {string} [params.smsUrl] The URL requested when an SMS is received. This URL must be valid and should return InboundXML
     *                 containing instructions on how to process the SMS. A badly formatted URL will NOT fallback to the
     *                 FallbackUrl but return an error without placing the call. URL length is limited to 200 characters.
     * @param {HttpMethod} [params.smsMethod] The HTTP method used to request the URL when an SMS is received.
     * @param {string} [params.smsFallbackUrl] URL used if the required URL is unavailable or if any errors occur during execution of
     *                 the InboundXML returned by the required URL. Url length is limited to 200 characters.
     * @param {HttpMethod} [params.smsFallbackMethod] The HTTP method used to request the smsFallbackUrl when an SMS is received.
     * @param {string} [params.heartbeatUrl] A URL that will be requested every 60 seconds during the call, sending information about
     *                 the call. The HeartbeatUrl will NOT be requested unless at least 60 seconds of call time
     *                 have elapsed. URL length is limited to 200 characters.
     * @param {HttpMethod} [params.heartbeatMethod] The HTTP method used to request the HeartbeatUrl.
     * @param {string} [params.statusCallback] A URL that will be requested when the call connects and ends, sending information about
     *                 the call. URL length is limited to 200 characters.
     * @param {HttpMethod} [params.statusCallbackMethod] The HTTP method used to request the StatusCallback URL.
     * @param {string} [params.hangupCallback] This is a StatusCallback clone that will be phased out in future versions.
     * @param {HttpMethod} [params.hangupCallbackMethod] This is a StatusCallbackMethod clone that will be phased out in future versions.
     * @returns {Promise} A new Incoming Phone Number
     */
    this.purchaseIncomingNumber = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/IncomingPhoneNumbers.json`,
            bodyParams
        });
    };

    /**
     * Updates an existing Incoming Phone Number's data.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.incomingPhoneNumberSid Incoming Phone Number SID
     * @param {string} [params.friendlyName] User generated name for the incoming number.
     * @param {boolean} [params.voiceCallerIdLookup] Look up the caller’s caller-ID name from the CNAM database (additional charges apply).
     * @param {string} [params.voiceUrl] The URL requested once the call connects. This URL must be valid and should return InboundXML
     *                 containing instructions on how to process your call. A badly formatted Url will NOT fallback to
     *                 the FallbackUrl but return an error without placing the call. Url length is limited
     *                 to 200 characters.
     * @param {HttpMethod} [params.voiceMethod] The HTTP method used to request the URL once the call connects.
     * @param {string} [params.voiceFallbackUrl] URL used if the required URL is unavailable or if any errors occur during execution of
     *                 the InboundXML returned by the required URL. Url length is limited to 200 characters.
     * @param {HttpMethod} [params.voiceFallbackMethod] The HTTP method used to request the FallbackUrl once the call connects.
     * @param {string} [params.smsUrl] The URL requested when an SMS is received. This URL must be valid and should return InboundXML
     *                 containing instructions on how to process the SMS. A badly formatted URL will NOT fallback to the
     *                 FallbackUrl but return an error without placing the call. URL length is limited to 200 characters.
     * @param {HttpMethod} [params.smsMethod] The HTTP method used to request the URL when an SMS is received.
     * @param {string} [params.smsFallbackUrl] URL used if the required URL is unavailable or if any errors occur during execution of
     *                 the InboundXML returned by the required URL. Url length is limited to 200 characters.
     * @param {HttpMethod} [params.smsFallbackMethod] The HTTP method used to request the smsFallbackUrl when an SMS is received.
     * @param {string} [params.heartbeatUrl] A URL that will be requested every 60 seconds during the call, sending information about
     *                 the call. The HeartbeatUrl will NOT be requested unless at least 60 seconds of call time
     *                 have elapsed. URL length is limited to 200 characters.
     * @param {HttpMethod} [params.heartbeatMethod] The HTTP method used to request the HeartbeatUrl.
     * @param {string} [params.statusCallback] A URL that will be requested when the call connects and ends, sending information about
     *                 the call. URL length is limited to 200 characters.
     * @param {HttpMethod} [params.statusCallbackMethod] The HTTP method used to request the StatusCallback URL.
     * @param {string} [params.hangupCallback] This is a StatusCallback clone that will be phased out in future versions.
     * @param {HttpMethod} [params.hangupCallbackMethod] This is a StatusCallbackMethod clone that will be phased out in future versions.
     * @returns {Promise} The updated Incoming Phone Number
     */
    this.updateIncomingNumber = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.incomingPhoneNumberSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/IncomingPhoneNumbers/${params.incomingPhoneNumberSid}.json`,
            bodyParams
        });
    };

    /**
     * Deletes an Incoming Phone Number
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.incomingPhoneNumberSid Incoming Phone Number SID
     * @returns {Promise} The deleted Incoming Phone Number
     */
    this.deleteIncomingNumber = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'DELETE',
            accountSid: params.accountSid,
            path: `/IncomingPhoneNumbers/${params.incomingPhoneNumberSid}.json`
        });
    };
}

module.exports = IncomingPhoneNumbersConnector;