'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).mms;

describe('MmsTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('sendMms', function () {
        it('should return an MMS message', function () {
            return connector.sendMmsMessage({
                to: '+123456',
                from: '+654321',
                body: 'This is MMS sent from CPaaS',
                statusCallback: 'callback.url',
                statusCallbackMethod: enums.HttpMethod.GET,
                mediaUrl:'https://media.giphy.com/media/zZJzLrxmx5ZFS/giphy.gif'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });
});