'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef TranscriptionQuality
 * @enum {string}
 */
const values = {
    AUTO: 'auto',
    HYBRID: 'hybrid',
    KEYWORDS: 'keywords'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;