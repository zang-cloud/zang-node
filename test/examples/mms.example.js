var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;

var connector = new cpaas.MmsConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//send mms message
connector.sendMmsMessage({
    to: '+123456',
    from: '+654321',
    body: 'This is MMS sent from CPaaS',
    mediaUrl: 'https://media.giphy.com/media/zZJzLrxmx5ZFS/giphy.gif',
    statusCallback: 'callback.url',
    statusCallbackMethod: enums.HttpMethod.GET,
}).then(function (data) {
    console.log(data);
});
    