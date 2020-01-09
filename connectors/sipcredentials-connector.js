'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Sip Credentials connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function SipCredentialsConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * View info on a SIP domain credentials list.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.credentialsListSid Credentials list SID
     * @returns {Promise} The Credentials List
     */
    this.viewCredentialsList = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/SIP/CredentialLists/${params.credentialsListSid}.json`
        });
    };

    /**
     * Show info on SIP domain credentials lists
     * @param {Object} [params] Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of Credentials Lists
     */
    this.listCredentialsLists = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/SIP/CredentialLists.json`,
            queryParams
        });
    };

    /**
     * Creates a SIP domain credentials list.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.friendlyName] A human readable name for this credentials list.
     * @returns {Promise} The created Credentials List
     */
    this.createCredentialsList = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/SIP/CredentialLists.json`,
            bodyParams
        });
    };

    /**
     * Updates information for a Credentials List.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.credentialsListSid Credentials List SID
     * @param {string} [params.friendlyName] New friendly name for this list.
     * @returns {Promise} The updated Credentials List
     */
    this.updateCredentialsList = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.credentialsListSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/SIP/CredentialLists/${params.credentialsListSid}.json`,
            bodyParams
        });
    };

    /**
     * Deletes a Credentials List
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.credentialsListSid Credentials List SID
     * @returns {Promise} The deleted Credentials List
     */
    this.deleteCredentialsList = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'DELETE',
            accountSid: params.accountSid,
            path: `/SIP/CredentialLists/${params.credentialsListSid}.json`
        });
    };

    /**
     * Gets information about a SIP domain credential
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.credentialsListSid Credentials List SID
     * @param {string} params.credentialSid Credential SID
     * @returns {Promise} Information about the requested Credential
     */
    this.viewCredential = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/SIP/CredentialLists/${params.credentialsListSid}/Credentials/${params.credentialSid}.json`
        });
    };

    /**
     * Lists Credentials attached to a particular Credentials List.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.credentialsListSid Credentials List SID
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of Credentials
     */
    this.listCredentials = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        delete queryParams.credentialsListSid;
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/SIP/CredentialLists/${params.credentialsListSid}/Credentials.json`,
            queryParams
        });
    };

    /**
     * Creates SIP Domain credentials.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.credentialsListSid Credentials List SID
     * @param {string} [params.username] The username used to identify this credential.
     * @param {string} [params.password] The password used to authenticate this credential.
     * @returns {Promise} The created credential.
     */
    this.createCredential = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.credentialsListSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/SIP/CredentialLists/${params.credentialsListSid}/Credentials.json`,
            bodyParams
        });
    };

    /**
     * Updates SIP Domain Credentials.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.credentialsListSid Credentials List SID
     * @param {string} [params.credentialSid] Credential SID
     * @param {string} [params.password] The password used to authenticate this credential.
     * @returns {Promise} The updated credential.
     */
    this.updateCredential = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.credentialsListSid;
        delete bodyParams.credentialSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/SIP/CredentialLists/${params.credentialsListSid}/Credentials/${params.credentialSid}.json`,
            bodyParams
        });
    };

    /**
     * Deletes a specific SIP Domain Credential.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.credentialsListSid] Credentials List SID
     * @param {string} [params.credentialSid] Credential SID
     * @returns {Promise} The deleted credential.
     */
    this.deleteCredential = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'DELETE',
            accountSid: params.accountSid,
            path: `/SIP/CredentialLists/${params.credentialsListSid}/Credentials/${params.credentialSid}.json`
        });
    };
}

module.exports = SipCredentialsConnector;