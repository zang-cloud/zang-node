'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @typedef Language
 * @enum {string}
 */
const values = {
    EN: 'en',
    EN_GB: 'en-gb',
    ES: 'es',
    FR: 'fr',
    IT: 'it',
    DE: 'de'
};

const reverseMap = utils.reverseMap(values);

values.forValue = function (value) {
    return reverseMap[value];
};

module.exports = values;