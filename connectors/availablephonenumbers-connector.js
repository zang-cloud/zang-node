'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Avilable Phone Numbers connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function AvailablePhoneNumbersConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * Shows information on all phone numbers available for purchasing
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.country Two letter country code
     * @param {AvailableNumberType} params.type Type of phone number
     * @param {string} [params.contains] Filter by numbers
     * @param {string} [params.areaCode] Filter by area code (only available for NA numbers).
     * @param {string} [params.inRegion] Filter by region
     * @param {string} [params.inPostalCode] Filter by postal code
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @return {Promise} List of phone numbers available for purchasing
     */
    this.listAvailablePhoneNumbers = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        delete queryParams.type;
        delete queryParams.country;
        return http.request(config, {
            accountSid: params.accountSid,
            path: `/AvailablePhoneNumbers/${params.country}/${params.type}.json`,
            queryParams
        });
    };
}

module.exports = AvailablePhoneNumbersConnector;