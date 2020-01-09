'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Applications connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function ApplicationsConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * Shows information about an application
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.applicationSid SID of the application for which the information should be retrieved
     * @returns {Promise} Information about the application
     */
    this.viewApplication = function (params) {
        params = params || {};
        return http.request(config, {
            accountSid: params.accountSid,
            path: `/Applications/${params.applicationSid}.json`
        });
    };

    /**
     * Lists available applications
     * @param {Object} params Request parameters
     * @param [params.accountSid] Account SID
     * @param [params.friendlyName] Filters by application friendly name
     * @param [params.page = 0] Page to return
     * @param [params.pageSize = 50] Number of items to return per page
     * @returns {Promise} A list of available applications
     */
    this.listApplications = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            accountSid: params.accountSid,
            path: `/Applications.json`,
            queryParams
        });
    };

    /**
     * Creates a new application
     * @param {Object} params Request parameters.
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.friendlyName] Friendly name for the new application
     * @param {string} [params.voiceUrl] The URL requested once the call connects. This URL must be valid and should return InboundXML
     *                 containing instructions on how to process your call. A badly formatted Url will NOT fallback to
     *                 the FallbackUrl but return an error without placing the call. Url length is limited
     *                 to 200 characters.
     * @param [params.voiceMethod] The HTTP method used to request the URL once the call connects.
     * @param [params.voiceFallbackUrl] URL used if the required URL is unavailable or if any errors occur during execution of
     *                         the InboundXML returned by the required URL. Url length is limited to 200 characters.
     * @param [params.voiceFallbackMethod] The HTTP method used to request the FallbackUrl once the call connects.
     * @param [params.voiceCallerIdLookup] Look up the caller’s caller-ID name from the CNAM database (additional charges apply).
     * @param [params.smsUrl] The URL requested when an SMS is received. This URL must be valid and should return InboundXML
     *               containing instructions on how to process the SMS. A badly formatted URL will NOT fallback to the
     *               FallbackUrl but return an error without placing the call. URL length is limited to 200 characters.
     * @param [params.smsMethod] The HTTP method used to request the URL when an SMS is received.
     * @param [params.smsFallbackUrl] URL used if the required URL is unavailable or if any errors occur during execution of
     *                       the InboundXML returned by the required URL. Url length is limited to 200 characters.
     * @param [params.smsFallbackMethod] The HTTP method used to request the smsFallbackUrl when an SMS is received.
     * @param [params.heartbeatUrl] A URL that will be requested every 60 seconds during the call, sending information about
     *                     the call. The HeartbeatUrl will NOT be requested unless at least 60 seconds of call time
     *                     have elapsed. URL length is limited to 200 characters.
     * @param [params.heartbeatMethod] The HTTP method used to request the HeartbeatUrl.
     * @param [params.statusCallback] A URL that will be requested when the call connects and ends, sending information about
     *                       the call. URL length is limited to 200 characters.
     * @param [params.statusCallbackMethod] The HTTP method used to request the StatusCallback URL.
     * @param [params.hangupCallback] This is a StatusCallback clone that will be phased out in future versions.
     * @param [params.hangupCallbackMethod] This is a StatusCallbackMethod clone that will be phased out in future versions.
     * @return {Promise} The created Application
     */
    this.createApplication = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Applications.json`,
            bodyParams
        });
    };

    /**
     * Updates an existing application's data.
     * @param {Object} params Request parameters.
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.applicationSid Application SID
     * @param {string} [params.friendlyName] Friendly name for the new application
     * @param {string} [params.voiceUrl] The URL requested once the call connects. This URL must be valid and should return InboundXML
     *                 containing instructions on how to process your call. A badly formatted Url will NOT fallback to
     *                 the FallbackUrl but return an error without placing the call. Url length is limited
     *                 to 200 characters.
     * @param [params.voiceMethod] The HTTP method used to request the URL once the call connects.
     * @param [params.voiceFallbackUrl] URL used if the required URL is unavailable or if any errors occur during execution of
     *                         the InboundXML returned by the required URL. Url length is limited to 200 characters.
     * @param [params.voiceFallbackMethod] The HTTP method used to request the FallbackUrl once the call connects.
     * @param [params.voiceCallerIdLookup] Look up the caller’s caller-ID name from the CNAM database (additional charges apply).
     * @param [params.smsUrl] The URL requested when an SMS is received. This URL must be valid and should return InboundXML
     *               containing instructions on how to process the SMS. A badly formatted URL will NOT fallback to the
     *               FallbackUrl but return an error without placing the call. URL length is limited to 200 characters.
     * @param [params.smsMethod] The HTTP method used to request the URL when an SMS is received.
     * @param [params.smsFallbackUrl] URL used if the required URL is unavailable or if any errors occur during execution of
     *                       the InboundXML returned by the required URL. Url length is limited to 200 characters.
     * @param [params.smsFallbackMethod] The HTTP method used to request the smsFallbackUrl when an SMS is received.
     * @param [params.heartbeatUrl] A URL that will be requested every 60 seconds during the call, sending information about
     *                     the call. The HeartbeatUrl will NOT be requested unless at least 60 seconds of call time
     *                     have elapsed. URL length is limited to 200 characters.
     * @param [params.heartbeatMethod] The HTTP method used to request the HeartbeatUrl.
     * @param [params.statusCallback] A URL that will be requested when the call connects and ends, sending information about
     *                       the call. URL length is limited to 200 characters.
     * @param [params.statusCallbackMethod] The HTTP method used to request the StatusCallback URL.
     * @param [params.hangupCallback] This is a StatusCallback clone that will be phased out in future versions.
     * @param [params.hangupCallbackMethod] This is a StatusCallbackMethod clone that will be phased out in future versions.
     * @returns {Promise} The created Application
     */
    this.updateApplication = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.applicationSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Applications/${params.applicationSid}.json`,
            bodyParams
        });
    };

    /**
     * Deletes an existing application
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.applicationSid SID of the application for which the information should be retrieved
     * @returns {Promise} Information about the application
     */
    this.deleteApplication = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'DELETE',
            accountSid: params.accountSid,
            path: `/Applications/${params.applicationSid}.json`
        });
    };

}

module.exports = ApplicationsConnector;