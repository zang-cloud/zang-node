'use strict';

/**
 * @module @avaya/cpaas/inboundxml/play
 */

const utils = require('./xml-utils');

/**
 * Creates a Play element.
 * @param {Object} params XML Node parameters.
 * @param {string} [params.url] URL of audio file you wish to play.
 * @param {number} [params.loop=1] The amount of times the <Play> should be repeated. 0 indicates an infinite loop. Allowed values are integers greater than or equal to 0.
 * @param {HttpMethod} [params.method]
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Play',
        contentParam: 'url',
        data: params
    });
};


