'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Carrier Services connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function CarrierServicesConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * The Carrier Lookup API allows you to retrieve additional information about a phone number.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string|Array<string>} params.phoneNumber Phone number to do a lookup for.
     * @returns {Promise} List of carrier lookup data.
     */
    this.carrierLookup = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Lookups/Carrier.json`,
            bodyParams
        });
    };

    /**
     * List all Carrier Lookups associated with an account.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of carrier lookup data.
     */
    this.listCarrierLookups = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/Lookups/Carrier.json`,
            queryParams
        });
    };


    /**
     * The CNAM Lookup API allows you to retrieve additional information about a phone number.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string|Array<string>} params.phoneNumber Phone number to do a lookup for.
     * @returns {Promise} List of CNAM lookup data.
     */
    this.cnamLookup = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Lookups/Cnam.json`,
            bodyParams
        });
    };

    /**
     * List all CNAM Lookups associated with an account.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of CNAM lookup data.
     */
    this.listCnamLookups = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/Lookups/Cnam.json`,
            queryParams
        });
    };

    /**
     * The BNA Lookup API allows you to retrieve additional information about a phone number.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string|Array<string>} params.phoneNumber Phone number to do a lookup for.
     * @returns {Promise} List of BNA lookup data.
     */
    this.bnaLookup = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Lookups/Bna.json`,
            bodyParams
        });
    };

    /**
     * List all BNA Lookups associated with an account.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of BNA lookup data.
     */
    this.listBnaLookups = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/Lookups/Bna.json`,
            queryParams
        });
    };
}

module.exports = CarrierServicesConnector;