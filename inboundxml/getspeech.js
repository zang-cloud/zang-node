'use strict';

const utils = require('./xml-utils');

/**
 * @module @avaya/cpaas/inboundxml/getspeech
 */

/**
 * Creates a GetSpeech element.
 * @param {Object} params XML Node parameters.
 * @param {Object[]} [params.content] Specify child elements of the GetSpeech element. Allowed elements are: Say, Play, Pause, PlayLastRecording
 * @param {string} [params.action]
 * @param {HttpMethod} [params.method]
 * @param {number} [params.timeout]
 * @param {boolean} [params.playBeep]
 * @param {string} [params.grammar]

 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'GetSpeech',
        contentParam: 'content',
        data: params
    });
};


