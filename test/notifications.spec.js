'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).notifications;

describe('NotificationsTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('viewNotification', function () {
        it('should return a notification', function () {
            return connector.viewNotification({
                notificationSid: 'TestNotificationSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listNotifications', function () {
        it('should return a list of notifications', function () {
            return connector.listNotifications({
                log: enums.LogLevel.INFO,
                page: 0,
                pageSize: 33
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

});



