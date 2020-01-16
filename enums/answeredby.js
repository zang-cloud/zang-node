'use strict';

const utils = require('./enum-utils');

/**
 * @module @avaya/cpaas/enums/answeredby
 */

/**
 * @readonly
 * @enum {string}
 */
const AnsweredBy = {
    HUMAN: 'human',
    MACHINE: 'machine',
    TBD: 'tbd'
};

const reverseMap = utils.reverseMap(AnsweredBy);

AnsweredBy.forValue = function(value) {
    return reverseMap[value];
};

module.exports = AnsweredBy;