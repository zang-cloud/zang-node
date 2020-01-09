'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Sip Domains connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function SipDomainsConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * Get information on your SIP domain
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.domainSid Domain SID
     * @returns {Promise} Info on the requested Domain.
     */
    this.viewDomain = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/SIP/Domains/${params.domainSid}.json`
        });
    };

    /**
     * List your SIP domains.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of SIP Domains
     */
    this.listDomains = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/SIP/Domains.json`,
            queryParams
        });
    };

    /**
     * Create a new SIP domain.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.domainName] An address on Avaya CPaaS uniquely associated with your account and through which all your SIP traffic is routed.
     * @param {string} [params.friendlyName] A human-readable name associated with this domain.
     * @param {string} [params.voiceUrl] The URL requested when a call is received by your domain.
     * @param {HttpMethod} [params.voiceMethod] The HTTP method used when requesting the VoiceUrl.
     * @param {string} [params.voiceFallbackUrl] The URL requested if the VoiceUrl fails.
     * @param {HttpMethod} [params.voiceFallbackMethod] The HTTP method used when requesting the VoiceFallbackUrl.
     * @param {string} [params.heartbeatUrl] URL that can be requested every 60 seconds during the call to notify of elapsed time and pass other general information.
     * @param {HttpMethod} [params.heartbeatMethod] 	Specifies the HTTP method used to request HeartbeatUrl.
     * @param {string} [params.voiceStatusCallback] The URL that Avaya CPaaS will use to send you status notifications regarding your SIP call.
     * @param {HttpMethod} [params.voiceStatusCallbackMethod] The HTTP method used when requesting the VoiceStatusCallback.
     * @returns {Promise} Created SIP domain.
     */
    this.createDomain = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/SIP/Domains.json`,
            bodyParams
        });
    };

    /**
     * Updates a SIP Domain.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.domainSid Domain SID
     * @param {string} [params.friendlyName] A human-readable name associated with this domain.
     * @param {string} [params.voiceUrl] The URL requested when a call is received by your domain.
     * @param {HttpMethod} [params.voiceMethod] The HTTP method used when requesting the VoiceUrl.
     * @param {string} [params.voiceFallbackUrl] The URL requested if the VoiceUrl fails.
     * @param {HttpMethod} [params.voiceFallbackMethod] The HTTP method used when requesting the VoiceFallbackUrl.
     * @param {string} [params.heartbeatUrl] URL that can be requested every 60 seconds during the call to notify of elapsed time and pass other general information.
     * @param {HttpMethod} [params.heartbeatMethod] 	Specifies the HTTP method used to request HeartbeatUrl.
     * @param {string} [params.voiceStatusCallback] The URL that CPaaS will use to send you status notifications regarding your SIP call.
     * @param {HttpMethod} [params.voiceStatusCallbackMethod] The HTTP method used when requesting the VoiceStatusCallback.
     * @returns {Promise} The updated Domain.
     */
    this.updateDomain = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.domainSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/SIP/Domains/${params.domainSid}.json`,
            bodyParams
        });
    };

    /**
     * Deletes a SIP domain.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.domainSid] Domain SID
     * @returns {Promise} The deleted SIP Domain
     */
    this.deleteDomain = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'DELETE',
            accountSid: params.accountSid,
            path: `/SIP/Domains/${params.domainSid}.json`
        });
    };

    /**
     * Shows info on credential lists attached to a SIP domain.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.domainSid Domain SID
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of Credential Lists.
     */
    this.listMappedCredentialsLists = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        delete queryParams.domainSid;
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/SIP/Domains/${params.domainSid}/CredentialListMappings.json`,
            queryParams
        });
    };

    /**
     * Maps a Credentials List to a SIP Domain
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.domainSid Domain SID
     * @param {string} params.credentialListSid Credentials List SID
     * @returns {Promise} The mapped Credentials List
     */
    this.mapCredentialsList = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.domainSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/SIP/Domains/${params.domainSid}/CredentialListMappings.json`,
            bodyParams
        });
    };

    /**
     * Deletes a Credentials List mapping.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.domainSid Domain SID
     * @param {string} params.credentialsListSid Credentials List SID
     * @returns {Promise} The unmapped Credentials List
     */
    this.deleteMappedCredentialsList = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'DELETE',
            accountSid: params.accountSid,
            path: `/SIP/Domains/${params.domainSid}/CredentialListMappings/${params.credentialsListSid}.json`
        });
    };

    /**
     * Shows info on IP access control lists attached to a SIP domain.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.domainSid Domain SID
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise}  of Access Control Lists.
     */
    this.listMappedIpAccessControlLists = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        delete queryParams.domainSid;
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/SIP/Domains/${params.domainSid}/IpAccessControlListMappings.json`,
            queryParams
        });
    };

    /**
     * Maps an IP access control list to a SIP domain.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.domainSid Domain SID
     * @param {string} params.ipAccessControlListSid The Sid of the IP ACL that you wish to associate with this domain.
     * @returns {Promise} The mapped IP ACL
     */
    this.mapIpAccessControlList = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.domainSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/SIP/Domains/${params.domainSid}/IpAccessControlListMappings.json`,
            bodyParams
        });
    };

    /**
     * Detaches an IP access control list from a SIP domain
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.domainSid Domain SID
     * @param {string} params.accessControlListSid Access Control List SID
     * @returns {Promise} The detached IP ACL
     */
    this.deleteMappedIpAccessControlList = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'DELETE',
            accountSid: params.accountSid,
            path: `/SIP/Domains/${params.domainSid}/IpAccessControlListMappings/${params.accessControlListSid}.json`
        });
    };
}

module.exports = SipDomainsConnector;