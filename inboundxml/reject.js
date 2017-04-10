'use strict';

/**
 * @module
 */

const xml = require('xml');
const utils = require('./xml-utils');

/**
 * Creates a Reject element.
 * @param {Object} params XML Node parameters.
 * @param {RejectReason} [params.reason=REJECTED] The reason to list as why the call was rejected.
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    const attributes = utils.prepareParams(params);
    return {
        Reject: {_attr: attributes}
    }
};


