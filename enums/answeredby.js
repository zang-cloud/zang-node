'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef AnsweredBy
 * @enum {string}
 */
const values = {
    HUMAN: 'human',
    MACHINE: 'machine',
    TBD: 'tbd'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;