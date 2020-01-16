'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new MMS connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function MmsConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
      * Sends an MMS Message.
      * @param {Object} params Request parameters
      * @param {string} [params.accountSid] Account SID
      * @param {string} [params.to] Must be an SMS capable number. The value does not have to be in any specific format.
      * @param {string} [params.from] Must be a Avaya CPaaS number associated with your account. The value does not have to be in any specific format.
      * @param {string} [params.body] Text of the SMS to be sent.
      * @param {string} [params.statusCallback] The URL that will be sent information about the SMS. Url length is limited to 200 characters.
      * @param {HttpMethod} [params.statusCallbackMethod] The HTTP method used to request the StatusCallback.
      * @param {boolean} [params.allowMultiple] If the Body length is greater than 160 characters, the SMS will be sent as a multi-part SMS.
      * @param {string} [params.mediaUrl] URL of images that will send as a message. It is required.
      * @returns {Promise} The sent SMS message.
      */
    this.sendMmsMessage = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/MMS/Messages.json`,
            bodyParams
        });
    };
}

module.exports = MmsConnector;