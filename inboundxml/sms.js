'use strict';

/**
 * @module @avaya/cpaas/inboundxml/sms
 */

const utils = require('./xml-utils');

/**
 * Creates an Sms element.
 * @param {Object} params XML Node parameters.
 * @param {string} [params.text] Text to send in the SMS.
 * @param {string} [params.to] The phone number that will receive the SMS message. If this parameter is not specified, the SMS will be sent back to the number that made the request to the Avaya CPaaS number’s SMS request URL.
 * @param {string} [params.from] The number that will display as sending the SMS message. This should be one of your Avaya CPaaS numbers. If this parameter is not specified, the default from number is the Avaya CPaaS number hosting the SMS request URL.
 * @param {string} [params.action] URL to direct Avaya CPaaS to once the <Sms> element is executed. Parameters specific to <Sms> are sent here along with the request.
 * @param {HttpMethod} [params.method=POST] Method used to request the action URL. Default Value: POST.
 * @param {string} [params.statusCallback] URL where the status of the SMS can be sent.
 * @param {HttpMethod} [params.statusCallbackMethod]
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Sms',
        contentParam: 'text',
        data: params
    });
};


