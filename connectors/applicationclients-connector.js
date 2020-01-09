'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Application Clients connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function ApplicationClientsConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * View all information about an application client.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.applicationSid Application SID of the client
     * @param {string} params.clientSid SID of the client for which the information should be retrieved
     * @return {Promise} Information about the Application Client
     */
    this.viewApplicationClient = function (params) {
        params = params || {};
        return http.request(config, {
            accountSid: params.accountSid,
            path: `/Applications/${params.applicationSid}/Clients/${params.clientSid}.json`
        });
    };

    /**
     * Lists available application clients.
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.applicationSid Application SID of the client
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @return {Promise} List of available Application Clients
     */
    this.listApplicationClients = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        delete queryParams.applicationSid;
        return http.request(config, {
            accountSid: params.accountSid,
            path: `/Applications/${params.applicationSid}/Clients.json`,
            queryParams
        });
    };


    /**
     * Creates a new application client for your application
     * @param {string} params.accountSid Account SID
     * @param {string} params.applicationSid Application for which to create a new client
     * @param {string} [params.nickname] Nickname for the new client
     * @return {Promise} The created ApplicationClient
     * @throws CPaaSException
     */
    this.createApplicationClient = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.applicationSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Applications/${params.applicationSid}/Clients/Tokens.json`,
            bodyParams
        });
    };

}

module.exports = ApplicationClientsConnector;