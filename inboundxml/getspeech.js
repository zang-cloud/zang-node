'use strict';

/**
 * @module
 */

const xml = require('xml');
const _ = require('lodash');
const utils = require('./xml-utils');

/**
 * Creates a GetSpeech element.
 * @param {Object} params XML Node parameters.
 * @param {Array<Object>} [params.content] Specify child elements of the GetSpeech element. Allowed elements are: Say, Play, Pause, PlayLastRecording
 * @param {string} [params.action]
 * @param {HttpMethod} [params.method]
 * @param {number} [params.timeout]
 * @param {boolean} [params.playBeep]
 * @param {string} [params.grammar]

 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    const attributes = utils.prepareParams(params);
    delete attributes.content;
    return {
        GetSpeech: _.concat({_attr: attributes}, params.content)
    }
};


