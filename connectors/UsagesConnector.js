'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');

module.exports = function UsagesConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    this.viewUsage = function(params) {
        return http.request(config, {
            path: `/Usages/${params.usageSid}.json`
        });
    };

    this.listUsages = function() {
        return http.request(config, {
            path: `/Usages.json`
        });
    }

    return this;
};