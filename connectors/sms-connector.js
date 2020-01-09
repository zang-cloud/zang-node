'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new SMS connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function SmsConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * Shows info on an SMS message.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.smsMessageSid SMS Message SID
     * @returns {Promise} The requested SMS message.
     */
    this.viewSmsMessage = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/SMS/Messages/${params.smsMessageSid}.json`
        });
    };

    /**
     * Shows info on all SMS messages associated with an account.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.to] Filter by receiving number.
     * @param {string} [params.from] Filter by sending number.
     * @param {Date} [params.dateSentGte] Filter by date sent greater or equal then.
     * @param {Date} [params.dateSentLt] Filter by date sent less than.
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} A list of SMS messages.
     */
    this.listSmsMessages = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/SMS/Messages.json`,
            queryParams
        });
    };

    /**
     * Sends an SMS Message.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.to] Must be an SMS capable number. The value does not have to be in any specific format.
     * @param {string} [params.from] Must be a Avaya CPaaS number associated with your account. The value does not have to be in any specific format.
     * @param {string} [params.body] Text of the SMS to be sent.
     * @param {string} [params.statusCallback] The URL that will be sent information about the SMS. Url length is limited to 200 characters.
     * @param {HttpMethod} [params.statusCallbackMethod] The HTTP method used to request the StatusCallback.
     * @param {boolean} [params.allowMultiple] If the Body length is greater than 160 characters, the SMS will be sent as a multi-part SMS.
     * @returns {Promise} The sent SMS message.
     */
    this.sendSmsMessage = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/SMS/Messages.json`,
            bodyParams
        });
    };
}

module.exports = SmsConnector;