'use strict';
const enums = require('../enums');
const ix = require('../inboundxml');

describe('SimpleInboundXmlTest', function () {
    it('should generate simple xml', function () {
        let xml = ix.build(ix.conference({
            record: true,
            beep: true
        }));
        console.log(xml);
        xml = ix.build(ix.dial({
            record: true,
            content: [ix.conference({record: true}), ix.conference({record: false, name: 'Jenny'})]
        }));
        console.log(xml);
    });

});
