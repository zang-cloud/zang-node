'use strict';

/**
 * @module
 */

const xml = require('xml');
const _ = require('lodash');
const utils = require('./xml-utils');

/**
 * Creates a Ping element.
 * @param {Object} params XML Node parameters.
 * @param {string} [params.url] Url you wish to ping (send default voice request parmeters to).
 * @param {HttpMethod} [params.method=POST] Method used to request ping url.
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    const attributes = utils.prepareParams(params);
    delete attributes.url;
    return {
        Ping: _.concat({_attr: attributes}, params.url)
    }
};


