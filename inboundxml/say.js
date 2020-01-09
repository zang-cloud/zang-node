'use strict';

/**
 * @module @avaya/cpaas/inboundxml/say
 */

const utils = require('./xml-utils');

/**
 * Creates a Say element.
 * @param {Object} params XML Node parameters.
 * @param {Voice} [params.voice=FEMALE] The gender of the voice that will speak the text. Allowed values are "man" or "woman". The default value is "woman".
 * @param {string} [params.text] Text to say.
 * @param {number} [params.loop] The amount of times the text should be repeated. Allowed values are any integer greater than or equal to 0. "0" indicates an infinite loop.
 * @param {Language} [params.language=EN] The language used to speak the text. Allowed values are "en" (American English), "en-gb" (British English), "es" (Spanish), "fr" (French), "it" (Italian) and "de" (German).
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Say',
        contentParam: 'text',
        data: params
    });
};


