'use strict';

/**
 * @module @avaya/cpaas/inboundxml/mms
 */

const utils = require('./xml-utils');

/**
 * Creates an Mma element.
 * @param {Object} params XML Node parameters.
 * @param {string} [params.text] Text to send in the MMS.
 * @param {string} [params.to] The phone number that will receive the MMS message. If this parameter is not specified, the MMS will be sent back to the number that made the request to the Avaya CPaaS number’s MMS request URL.
 * @param {string} [params.from] The number that will display as sending the MMS message. This should be one of your Avaya CPaaS numbers. If this parameter is not specified, the default from number is the Avaya CPaaS number hosting the MMS request URL.
 * @param {string} [params.action] URL to direct Avaya CPaaS to once the <Mms> element is executed. Parameters specific to <Mms> are sent here along with the request.
 * @param {HttpMethod} [params.method=POST] Method used to request the action URL. Default Value: POST.
 * @param {string} [params.statusCallback] URL where the status of the MMS can be sent.
 * @param {HttpMethod} [params.statusCallbackMethod]
 * @param {string} [params.mediaUrl] URL of images that will send as a message. It is required.
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Mms',
        contentParam: 'text',
        data: params
    });
};


