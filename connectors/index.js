'use strict';

const usagesConnector = require('./usages-connector');
const applicationsConnector = require('./applications-connector');

const Factory = function Factory(configuration){
    if (configuration) {
        this.usages = new usagesConnector(configuration);
        this.applications = new applicationsConnector(configuration);
    }
};

module.exports = {
    Factory: Factory,
    Usages: function Usages(configuration){
        return new usagesConnector(configuration);
    },
    Applications: function Applications(configuration) {
        return new applicationsConnector(configuration);
    }
};