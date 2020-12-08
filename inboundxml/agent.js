'use strict';

/**
 * @module @avaya/cpaas/inboundxml/agent
 */

const utils = require('./xml-utils');

/**
 * Creates a Agent element.
 * @param {Object} params XML Node parameters.
 * @param {string} [params.agentId] The agent id.
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Agent',
        contentParam: 'agentId',
        data: params
    });
};