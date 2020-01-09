var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;

var connector = new cpaas.Connectors({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
}).usages;

//list usages
connector.listUsages({
    year: 2016,
    month: 12,
    day: 12,
    product: enums.Product.OUTBOUND_CALL,
    page: 0,
    pageSize: 25
}).then(function(data) {
    console.log(data);
});

//view usage
connector.viewUsage({
    usageSid: 'TestUsageSid'
}).then(function(data) {
    console.log(data);
});