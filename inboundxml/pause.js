'use strict';

/**
 * @module @avaya/cpaas/inboundxml/pause
 */

const utils = require('./xml-utils');

/**
 * Creates a Pause element.
 * @param {Object} params XML Node parameters.
 * @param {number} [params.length=1] The length in seconds the pause should be. Allowed Value: integer greater than 0, less than 99999
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Pause',
        data: params
    });
};


