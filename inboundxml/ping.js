'use strict';

/**
 * @module @avaya/cpaas/inboundxml/ping
 */

const utils = require('./xml-utils');

/**
 * Creates a Ping element.
 * @param {Object} params XML Node parameters.
 * @param {string} [params.url] Url you wish to ping (send default voice request parmeters to).
 * @param {HttpMethod} [params.method=POST] Method used to request ping url.
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Ping',
        contentParam: 'url',
        data: params
    });
};


