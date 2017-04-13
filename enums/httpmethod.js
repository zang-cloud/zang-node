'use strict';
const utils = require('./enum-utils');

/**
 * @readonly
 * @enum {string}
 */
const HttpMethod = {
    POST: 'POST',
    GET: 'GET'
};

const reverseMap = utils.reverseMap(HttpMethod);

HttpMethod.forValue = function(value) {
    return reverseMap[value];
};

module.exports = HttpMethod;