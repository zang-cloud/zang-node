var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;

var connector = new cpaas.IncomingPhoneNumbersConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//view incoming number
connector.viewIncomingNumber({
    incomingPhoneNumberSid: 'TestIncomingPhoneNumberSid'
}).then(function (data) {
    console.log(data);
});

//list incoming numbers
connector.listIncomingNumbers({
    contains: '123',
    page: 0,
    pageSize: 25
}).then(function (data) {
    console.log(data);
});

//purchase incoming number
connector.purchaseIncomingNumber({
    friendlyName: 'MyNumber',
    phoneNumber: '+1234',
    areaCode: '123',
    voiceCallerIdLookup: true,
    voiceApplicationSid: 'VoiceApplicationSid',
    smsApplicationSid: 'SmsApplicationSid',
}).then(function (data) {
    console.log(data);
});

//update incoming number
connector.updateIncomingNumber({
    incomingPhoneNumberSid: 'TestIncomingPhoneNumberSid',
    friendlyName: 'MyNumber',
    voiceCallerIdLookup: true,
    voiceUrl: 'VoiceUrl',
    voiceMethod: enums.HttpMethod.GET,
    voiceFallbackUrl: 'VoiceFallbackUrl',
    voiceFallbackMethod: enums.HttpMethod.GET
}).then(function (data) {
    console.log(data);
});

//delete incoming number
connector.deleteIncomingNumber({
    incomingPhoneNumberSid: 'TestIncomingPhoneNumberSid'
}).then(function (data) {
    console.log(data);
});
