'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Usages connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function UsagesConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * View the usage of an item returned by List Usages.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.usageSid Usage SID
     * @returns {Promise} Information about the Usage.
     */
    this.viewUsage = function (params) {
        params = params || {};
        return http.request(config, {
            accountSid: params.accountSid,
            path: `/Usages/${params.usageSid}.json`
        });
    };

    /**
     * Lists usages associated with an account.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {number} [params.day] Filters usage by day of month. If no month is specified then defaults to current month. Allowed
     *                   values are integers between 1 and 31 depending on the month.
     * @param {number} [params.month] Filters usage by month. Allowed values are integers between 1 and 12.
     * @param {number} [params.year] Filters usage by year. Allowed values are valid years in integer form.
     * @param {Product} params.product Filters usage by a specific Avaya CPaaS product.
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} A list of Usages.
     */
    this.listUsages = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            accountSid: params.accountSid,
            path: `/Usages.json`,
            queryParams
        }).then(data => {
            return data;
        });
    };
}

module.exports = UsagesConnector;