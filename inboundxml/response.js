'use strict';

/**
 * @module @avaya/cpaas/inboundxml/response
 */

const utils = require('./xml-utils');

/**
 * Creates a Response element.
 * @param {Object} params XML Node parameters.
 * @param {Object[]} [params.content] Specify child elements of the Response element. Allowed elements are: Dial, Gather, GetSpeech, Hangup, Pause, Piong, Play, Record, Redirect, Reject, Say, Sms, PlayLastRecording
 * @param {string} [params.statusCallback] Sets the status callback.
 * @param {HttpMethod} [params.statusMethod] Sets the status method.
 * @param {string} [params.heartbeatCallback] Sets the heartbeat callback.
 * @param {HttpMethod} [params.heartbeatMethod] Sets the heartbeat method.
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Response',
        contentParam: 'content',
        data: params
    });
};


