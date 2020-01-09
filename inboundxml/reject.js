'use strict';

/**
 * @module @avaya/cpaas/inboundxml/reject
 */

const utils = require('./xml-utils');

/**
 * Creates a Reject element.
 * @param {Object} params XML Node parameters.
 * @param {RejectReason} [params.reason=REJECTED] The reason to list as why the call was rejected.
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Reject',
        data: params
    });
};


