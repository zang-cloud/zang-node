'use strict';

/**
 * @module @avaya/cpaas/inboundxml/user
 */

const utils = require('./xml-utils');

/**
 * Creates a User element.
 * @param {Object} params XML Node parameters.
 * @param {string} [params.content]
 * @param {string} [params.sendDigits]
 * @param {string} [params.params]
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'User',
        contentParam: 'content',
        data: params
    });
};


