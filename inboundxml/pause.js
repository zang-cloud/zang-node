'use strict';

/**
 * @module
 */

const xml = require('xml');
const _ = require('lodash');
const utils = require('./xml-utils');

/**
 * Creates a Pause element.
 * @param {Object} params XML Node parameters.
 * @param {number} [params.length=1] The length in seconds the pause should be. Allowed Value: integer greater than 0, less than 99999
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    const attributes = utils.prepareParams(params);
    return {
        Pause: _.concat({_attr: attributes}, params)
    }
};


