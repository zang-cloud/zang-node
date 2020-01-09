var cpaas = require('@avaya/cpaas');

var connector = new cpaas.FraudControlConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//list fraud control resources
connector.listFraudControlResources({
    page: 0,
    pageSize: 22
}).then(function (data) {
    console.log(data);
});

//block destination
connector.blockDestination({
    countryCode: 'HR',
    mobileEnabled: false,
    landlineEnabled: true,
    smsEnabled: false
}).then(function (data) {
    console.log(data);
});

//authorize destination
connector.authorizeDestination({
    countryCode: 'HR',
    mobileEnabled: false,
    landlineEnabled: true,
    smsEnabled: false
}).then(function (data) {
    console.log(data);
});

//extend destination authorization
connector.extendDestinationAuthorization({
    countryCode: 'HR'
}).then(function (data) {
    console.log(data);
});

//whitelist destination
connector.whitelistDestination({
    countryCode: 'HR',
    mobileEnabled: false,
    landlineEnabled: true,
    smsEnabled: false
}).then(function (data) {
    console.log(data);
});
