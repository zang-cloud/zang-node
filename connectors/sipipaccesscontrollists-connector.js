'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new SIP IP Access Control Lists connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function SipIpAccessControlListsConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * View information for an IP access control list.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.ipAccessControlListSid IP Access Control List SID
     * @returns {Promise} The requested Access Control List
     */
    this.viewIpAccessControlList = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/SIP/IpAccessControlLists/${params.ipAccessControlListSid}.json`
        });
    };

    /**
     * Lists IP Access Control Lists associated with an account.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of IP Access Control Lists
     */
    this.listIpAccessControlLists = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/SIP/IpAccessControlLists.json`,
            queryParams
        });
    };

    /**
     * Creates an IP Access Control List
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.friendlyName] A human-readable name associated with this IP ACL.
     * @returns {Promise} The created Access Control List
     */
    this.createIpAccessControlList = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/SIP/IpAccessControlLists.json`,
            bodyParams
        });
    };

    /**
     * Updates information for an IP access control list.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.ipAccessControlListSid IP Access Control List SID
     * @param {string} [params.friendlyName] A human-readable name associated with this IP ACL.
     * @returns {Promise} The updated Access Control List
     */
    this.updateIpAccessControlList = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.ipAccessControlListSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/SIP/IpAccessControlLists/${params.ipAccessControlListSid}.json`,
            bodyParams
        });
    };

    /**
     * Deletes an IP Access Control List
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.ipAccessControlListSid IP Access Control List SID
     * @returns {Promise} The deleted Access Control List
     */
    this.deleteIpAccessControlList = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'DELETE',
            accountSid: params.accountSid,
            path: `/SIP/IpAccessControlLists/${params.ipAccessControlListSid}.json`
        });
    };

    /**
     * View information on an IP access control list IP address.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.ipAccessControlListSid IP Access Control List SID
     * @param {string} params.ipSid IP Address SID
     * @returns {Promise} Information about the requested IP Address
     */
    this.viewAccessControlListIp = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/SIP/IpAccessControlLists/${params.ipAccessControlListSid}/IpAddresses/${params.ipSid}.json`
        });
    };

    /**
     * Lists IP addresses attached to an IP access control list.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.ipAccessControlListSid IP Access Control List SID
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of IP Addresses
     */
    this.listAccessControlListIps = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        delete queryParams.ipAccessControlListSid;
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/SIP/IpAccessControlLists/${params.ipAccessControlListSid}/IpAddresses.json`,
            queryParams
        });
    };

    /**
     * Adds a new IP to an access control list.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.ipAccessControlListSid IP Access Control List SID
     * @param {string} [params.friendlyName] A human-readable name associated with this IP Address.
     * @param {string} [params.ipAddress] An IP address from which you wish to accept traffic. At this time, only IPv4 supported.
     * @returns {Promise} The associated IP Address
     */
    this.addAccessControlListIp = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.ipAccessControlListSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/SIP/IpAccessControlLists/${params.ipAccessControlListSid}/IpAddresses.json`,
            bodyParams
        });
    };

    /**
     * Updates IP Address for an IP Access Control List.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.ipAccessControlListSid IP Access Control List SID
     * @param {string} params.ipSid IP Address SID
     * @param {string} [params.friendlyName] A human-readable name associated with this IP Address.
     * @param {string} [params.ipAddress] An IP address from which you wish to accept traffic. At this time, only IPv4 supported.
     * @returns {Promise} The updated IP Address
     */
    this.updateAccessControlListIp = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.ipAccessControlListSid;
        delete bodyParams.ipSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/SIP/IpAccessControlLists/${params.ipAccessControlListSid}/IpAddresses/${params.ipSid}.json`,
            bodyParams
        });
    };

    /**
     * Removes an IP address from an Access Control List.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.ipAccessControlListSid IP Access Control List SID
     * @param {string} params.ipSid IP Address SID
     * @returns {Promise} The removed IP Address
     */
    this.deleteAccessControlListIp = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'DELETE',
            accountSid: params.accountSid,
            path: `/SIP/IpAccessControlLists/${params.ipAccessControlListSid}/IpAddresses/${params.ipSid}.json`
        });
    };
}

module.exports = SipIpAccessControlListsConnector;