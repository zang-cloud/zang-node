var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;

var connector = new cpaas.AvailablePhoneNumbersConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//list available phone numbers
connector.listAvailablePhoneNumbers({
    country: 'HR',
    type: enums.AvailableNumberType.TOLLFREE,
    contains: '123',
    areaCode: '052',
    inRegion: 'Istria',
    inPostalCode: '52210',
    page: 0,
    pageSize: 20
}).then(function(data){
    data.available_phone_numbers.forEach(function(availableNumber){
        console.log(availableNumber.phone_number);
    });
});