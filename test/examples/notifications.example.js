var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;

var connector = new cpaas.NotificationsConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//view notification
connector.viewNotification({
    notificationSid: 'TestNotificationSid'
}).then(function (notification) {
    console.log(notification.sid);
});

//list notifications
connector.listNotifications({
    log: enums.LogLevel.INFO,
    page: 0,
    pageSize: 33
}).then(function (data) {
    console.log(data);
});
