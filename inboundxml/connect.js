'use strict';

const utils = require('./xml-utils');

/**
 * @module @avaya/cpaas/inboundxml/connect
 */

/**
 * Creates a conect element.
 * @param {Object} params XML Node parameters.
 * @param {Object[]} [params.content] Specify child elements of the Connect element. Allowed elements are: Agent
 * @param {string} [params.action] URL where the flow of the call and the gathered digits will be forwarded to (if digits are input).
 * @param {HttpMethod} [params.method=POST] Method used to request the action URL.
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Connect',
        contentParam: 'content',
        data: params
    });
};


