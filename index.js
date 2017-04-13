'use strict';

/**
 * Zang helper APIs for Node.js
 * @module zang-node
 */

/**
 * Connectors helper
 * @type {Connectors}
 */
const Connectors = require('./connectors');

/**
 * InboundXml helper
 * @see module:zang-node/inboundxml
 */
const inboundXml = require('./inboundxml');

/**
 * Enums
 * @see module:zang-node/enums
 */
const enums = require('./enums');

module.exports.Connectors = Connectors;
module.exports.inboundXml = inboundXml;
module.exports.enums = enums;
