'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef Voice
 * @enum {string}
 */
const values = {
    FEMALE: 'female',
    MALE: 'male'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function (value) {
    return reverseMap[value];
};

module.exports = values;