'use strict';

/**
 * @readonly
 * @enum HttpMethod
 */
const values = {
    POST: 'POST',
    GET: 'GET'
};

const reverseMap = {
    "POST": values.POST,
    "GET": values.GET
};

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;