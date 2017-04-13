'use strict';

const _ = require('lodash');

module.exports = {
    prepareParams: function (params) {
        if (!params) return {};
        return _.clone(params);
    },
    createNode: function (params) {
        if (!params || !params.name) return null;
        const elementName = params.name;
        let content = null;
        let attributes = null;
        if (params.data) {
            attributes = module.exports.prepareParams(params.data);
            if (params.contentParam) {
                content = params.data[params.contentParam];
                delete attributes[params.contentParam];
            }
        }

        let ret = {};
        if (!content) {
            if (!attributes) {
                ret[elementName] = {};
                return ret;
            } else {
                ret[elementName] = {_attr: attributes};
            }
        } else {
            if (!attributes) {
                ret[elementName] = _.concat(null, content);
            } else {
                ret[elementName] = _.concat({_attr: attributes}, content);
            }
        }
        return ret;
    }
};