'use strict';

/**
 * @module @avaya/cpaas/inboundxml/redirect
 */

const utils = require('./xml-utils');

/**
 * Creates a Redirect element.
 * @param {Object} params XML Node parameters.
 * @param {string} [params.url] The URL of the InboundXML document you wish to redirect to.
 * @param {HttpMethod} [params.method=POST] Method used to request the InboundXML document the call is being redirected to.
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Redirect',
        contentParam: 'url',
        data: params
    });
};


