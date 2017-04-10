'use strict';

/**
 * @module
 */

const xml = require('xml');
const _ = require('lodash');
const utils = require('./xml-utils');

/**
 * Creates a Sip element.
 * @param {Object} params XML Node parameters.
 * @param {string} [params.sipAddress] Sip address to call.
 * @param {string} [params.username] If provided, will be passed along as sip authentication username.
 * @param {string} [params.password] If provided, will be passed along as sip authentication password.
 * @param {string} [params.action]
 * @param {HttpMethod} [params.method]
 * @param {string} [params.sendDigits]
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    const attributes = utils.prepareParams(params);
    delete attributes.sipAddress;
    return {
        Sip: _.concat({_attr: attributes}, params.sipAddress)
    }
};


