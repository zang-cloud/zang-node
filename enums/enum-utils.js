'use strict';
const _ = require('lodash');

module.exports = {
  reverseMap: function(map) {
      return _.invert(map);
  }
};