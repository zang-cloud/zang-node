'use strict';

const utils = require('./xml-utils');

/**
 * @module @avaya/cpaas/inboundxml/dial
 */

/**
 * Creates a Conference element.
 * @param {Object} params XML Node parameters.
 * @param {Object[]} [params.content] Specify child elements of the Dial element. Allowed elements are: Conference, Number, Sip
 * @param {string} [params.action] URL where some parameters specific to <Dial> will be sent for further processing. The calling party can be redirected here upon the hangup of the B leg caller.
 * @param {HttpMethod} [params.method=POST] Method used to request the action URL.
 * @param {number} [params.timeout]
 * @param {string} [params.callbackUrl] URL requested when the dialed call connects and ends. Note that this URL only receives parameters containing information about the call, the call does not execute XML given as a callbackUrl.
 * @param {HttpMethod} [params.callbackMethod=POST] Method used to request the callback URL.
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Refer',
        contentParam: 'content',
        data: params
    });
};


