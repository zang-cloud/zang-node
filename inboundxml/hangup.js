'use strict';

const utils = require('./xml-utils');

/**
 * @module @avaya/cpaas/inboundxml/hangup
 */

/**
 * Creates a Hangup element.
 * @param {Object} params XML Node parameters.
 * @param {number} [params.schedule] Specifies in seconds when a hangup should occur during a call. Allowed Value: integer greater than or equal to 0
 * @param {RejectReason} [params.reason]  Reason for the hangup. It can be rejected or busy. Default is none.
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Hangup',
        data: params
    });
};


