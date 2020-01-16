'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Fraud Control connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function FraudControlConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * Restricts outbound calls and sms messages to some destination.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.countryCode] Country code of destination which you want to restrict.
     * @param {boolean} [params.mobileEnabled] Mobile status for the destination. If false, all mobile call activity will be rejected
     *                      or disabled.
     * @param {boolean} [params.landlineEnabled] Landline status for the destination. If false, all landline call activity will be
     *                        rejected or disabled.
     * @param {boolean} [params.smsEnabled] SMS status for the destination. If false, all SMS activity will be rejected or disabled.
     * @returns {Promise} The created Fraud control rule
     */
    this.blockDestination = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.countryCode;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Fraud/Block/${params.countryCode}.json`,
            bodyParams
        });
    };

    /**
     * Authorizes previously blocked destination for outbound calls and sms messages.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.countryCode] Country code of destination which you want to authorize.
     * @param {boolean} [params.mobileEnabled] Mobile status for the destination. If false, all mobile call activity will be rejected
     *                      or disabled.
     * @param {boolean} [params.landlineEnabled] Landline status for the destination. If false, all landline call activity will be
     *                        rejected or disabled.
     * @param {boolean} [params.smsEnabled] SMS status for the destination. If false, all SMS activity will be rejected or disabled.
     * @returns {Promise} The created Fraud control rule
     */
    this.authorizeDestination = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.countryCode;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Fraud/Authorize/${params.countryCode}.json`,
            bodyParams
        });
    };

    /**
     * Extends a destinations authorization expiration by 30 days
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.countryCode] Country code of destination for which you want to extend authorization.
     * @returns {Promise} The created Fraud control rule
     */
    this.extendDestinationAuthorization = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Fraud/Extend/${params.countryCode}.json`
        });
    };

    /**
     * Permanently authorizes destination that may have been blocked by the automated fraud detection system
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.countryCode] Country code of destination which you want to authorize.
     * @param {boolean} [params.mobileEnabled] Mobile status for the destination. If false, all mobile call activity will be rejected
     *                      or disabled.
     * @param {boolean} [params.landlineEnabled] Landline status for the destination. If false, all landline call activity will be
     *                        rejected or disabled.
     * @param {boolean} [params.smsEnabled] SMS status for the destination. If false, all SMS activity will be rejected or disabled.
     * @returns {Promise} The created Fraud control rule
     */
    this.whitelistDestination = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.countryCode;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Fraud/Whitelist/${params.countryCode}.json`,
            bodyParams
        });
    };

    /**
     * Shows information on all fraud control resources associated with an account.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of Fraud Control rules.
     */
    this.listFraudControlResources = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            accountSid: params.accountSid,
            path: `/Fraud.json`,
            queryParams
        });
    };
}

module.exports = FraudControlConnector;