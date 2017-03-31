'use strict';

const usagesConnector = require('./usages-connector');

const Factory = function Factory(configuration){
    if (configuration) {
        this.usages = new usagesConnector(configuration);
    }
};

module.exports = {
    Factory: Factory
};