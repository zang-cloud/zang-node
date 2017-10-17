var zang = require('zang-node');
var enums = zang.enums;

var connector = new zang.SmsConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//view sms message
connector.viewSmsMessage({
    smsMessageSid: 'TestSmsSid'
}).then(function (data) {
    console.log(data);
});

//list sms messages
connector.listSmsMessages({
    to: '+123456',
    page: 0,
    pageSize: 10
}).then(function (data) {
    console.log(data);
});

//send sms message
connector.sendSmsMessage({
    to: '+123456',
    from: '+654321',
    body: 'Hello from Zang!',
    statusCallback: 'http://mycallback.url.com',
    statusCallbackMethod: enums.HttpMethod.GET,
    allowMultiple: true
}).then(function (data) {
    console.log(data);
});
    