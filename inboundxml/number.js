'use strict';

/**
 * @module @avaya/cpaas/inboundxml/number
 */

const utils = require('./xml-utils');

/**
 * Creates a Number element.
 * @param {Object} params XML Node parameters.
 * @param {string} [params.number] The phone number.
 * @param {string} [params.sendDigits] Specifies which DTMF tones to play to the called party. w indicates a half second pause.
 * @param {string} [params.url]
 * @param {HttpMethod} [params.method]
 * @param {boolean} [params.sendOnPreanswer]
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Number',
        contentParam: 'number',
        data: params
    });
};


