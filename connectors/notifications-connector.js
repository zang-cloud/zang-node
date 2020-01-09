'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Notifications connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function NotificationsConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * Shows information about a notification.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.notificationSid Notification SID
     * @returns {Promise} The requested Notification
     */
    this.viewNotification = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/Notifications/${params.notificationSid}.json`
        });
    };

    /**
     * Lists notifications associated with an account.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {LogLevel} [params.log] Specifies that only notifications with the given log level value should be listed.
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} A list of Notifications.
     */
    this.listNotifications = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/Notifications.json`,
            queryParams
        });
    };
}

module.exports = NotificationsConnector;