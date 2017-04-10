'use strict';

/**
 * @module
 */

const xml = require('xml');
const utils = require('./xml-utils');

/**
 * Creates a Hangup element.
 * @param {Object} params XML Node parameters.
 * @param {number} [params.schedule] Specifies in seconds when a hangup should occur during a call. Allowed Value: integer greater than or equal to 0
 * @param {RejectReason} [params.reason]  Reason for the hangup. It can be rejected or busy. Default is none.
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    const attributes = utils.prepareParams(params);
    return {
        Hangup: {_attr: attributes}
    }
};


