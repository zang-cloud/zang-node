'use strict';

/**
 * @module
 */

const xml = require('xml');
const _ = require('lodash');
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
    const attributes = utils.prepareParams(params);
    delete attributes.number;
    return {
        Number: _.concat({_attr: attributes}, params.number)
    }
};


