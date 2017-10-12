var zang = require('zang-node');
var enums = zang.enums;

var connector = new zang.MmsConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//send sms message
connector.sendMmsMessage({
    to: '+123456',
    from: '+654321',
    body: 'Hello from Zang!',
    statusCallback: 'http://mycallback.url.com',
    statusCallbackMethod: enums.HttpMethod.GET,
    allowMultiple: true,
    mediaUrl:'https://media.giphy.com/media/zZJzLrxmx5ZFS/giphy.gif'
}).then(function (data) {
    console.log(data);
});
    