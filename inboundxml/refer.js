'use strict';

const utils = require('./xml-utils');

/**
 * @module @avaya/cpaas/inboundxml/refer
 */

/**
 * Creates a Refer element.
 * @param {Object} params XML Node parameters.
 * @param {Object[]} [params.content] Specify child elements of the Refer element. Allowed elements are: Sip
 * @param {string} [params.action] URL to fetch the set of instructions for further processing. It is executed when the transfer fails with a failure response or when the <Refer> verb is timed out.
 * @param {HttpMethod} [params.method=POST] Method used to request the action URL.
 * @param {number} [params.timeout] The number of seconds CPaaS should wait for <Refer> verb to conclude.
 * @param {string} [params.callbackUrl] URL where the status of the Refer can be sent. Note that this URL only receives parameters containing information about the call, the call does not execute XML given as a callbackUrl.
 * @param {HttpMethod} [params.callbackMethod=POST] Method used to request the callback URL. Default Value: POST. Allowed Value: POST or GET.
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Refer',
        contentParam: 'content',
        data: params
    });
};


