'use strict';

/**
 * @module
 */

const xml = require('xml');
const _ = require('lodash');
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
    const attributes = utils.prepareParams(params);
    delete attributes.content;
    return {
        User: _.concat({_attr: attributes}, params.content)
    }
};


