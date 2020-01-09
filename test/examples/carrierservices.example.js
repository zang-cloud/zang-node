var cpaas = require('@avaya/cpaas');

var connector = new cpaas.CarrierServicesConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//carrier lookup
connector.carrierLookup({
    phoneNumber: '+1234'
}).then(function (data) {
    console.log(data);

});


//list carrier lookups
connector.listCarrierLookups({
    page: 0,
    pageSize: 33
}).then(function (data) {
    console.log(data);

});

//cnam lookup
connector.cnamLookup({
    phoneNumber: '+1234'
}).then(function (data) {
    console.log(data);

});

//list cnam lookups
connector.listCnamLookups({
    page: 0,
    pageSize: 33
}).then(function (data) {
    console.log(data);

});

//bna lookup
connector.bnaLookup({
    phoneNumber: '+1234'
}).then(function (data) {
    console.log(data);

});

//list bna lookups
connector.listBnaLookups({
    page: 0,
    pageSize: 33
}).then(function (data) {
    console.log(data);
});
