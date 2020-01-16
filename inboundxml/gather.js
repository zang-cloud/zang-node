'use strict';

const utils = require('./xml-utils');

/**
 * @module @avaya/cpaas/inboundxml/gather
 */

/**
 * Creates a Gather element.
 * @param {Object} params XML Node parameters.
 * @param {Object[]} [params.content] Specify child elements of the Gather element. Allowed elements are: Say, Play, Pause, PlayLastRecording
 * @param {string} [params.action] URL where the flow of the call and the gathered digits will be forwarded to (if digits are input).
 * @param {HttpMethod} [params.method=POST] Method used to request the action URL.
 * @param {number} [params.timeout=5] The number of seconds <Gather> should wait for digits to be entered before requesting the action URL. Timeout resets with each new digit input. Timeout accepts any integer greater than or equal to 0.
 * @param {string} [params.finishOnKey=#] The key a caller can press to end the <Gather>. Acceptable values are digits from 0 to 9, # or *
 * @param {string} [params.numDigits] The maximum number of digits to <Gather>. Default value is set to no limit. Acceptable value is any integer greater than or equal to 0.
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Gather',
        contentParam: 'content',
        data: params
    });
};


