'use strict';

/**
 * @module inboundxml
 */

const xml = require('xml');
const conference = require('./conference');
const dial = require('./dial');
const gather = require('./gather');
const getspeech = require('./getspeech');

module.exports = {
    /**
     * Creates XML from XML definition
     * @param {Object} xmlDefinition
     * @returns {Object}
     */
    build: function(xmlDefinition) {
        return xml(xmlDefinition, {indent: '  '});
    },
    /**
     * Creates Conference XML node
     * @see module:inboundxml/conference
     */
    conference,
    /**
     * Creates Dial XML node
     * @see module:inboundxml/dial
     */
    dial,
    /**
     * Creates Gather XML node
     * @see module:inboundxml/gather
     */
    gather,
    /**
     * Creates Gather XML node
     * @see module:inboundxml/gather
     */
    getspeech
};
