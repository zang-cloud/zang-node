'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Accounts connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function AccountsConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * See all the information associated with an account
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] The sid for the account to be retrieved.
     * @returns {Promise} Account object
     */
    this.viewAccount = function (params) {
        params = params || {};
        return http.request(config, {
            accountSid: params.accountSid,
            path: `.json`
        });
    };

    /**
     * Updates a specific account's information.
     * @param params Request parameters.
     * @param {string} [params.accountSid]  Sid of account to update
     * @param {string} params.friendlyName The new friendly name for this account
     * @return {Promise} Updated account
     */
    this.updateAccount = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `.json`,
            bodyParams
        });
    };

}

module.exports = AccountsConnector;