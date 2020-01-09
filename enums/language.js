'use strict';
const utils = require('./enum-utils');

/**
 * @module @avaya/cpaas/enums/language
 */

/**
 * @readonly
 * @enum {string}
 */
const Language = {
    EN: 'en',
    EN_GB: 'en-gb',
    ES: 'es',
    FR: 'fr',
    IT: 'it',
    DE: 'de'
};

const reverseMap = utils.reverseMap(Language);

Language.forValue = function (value) {
    return reverseMap[value];
};

module.exports = Language;