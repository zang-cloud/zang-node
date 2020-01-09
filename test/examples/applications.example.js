var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;

var connector = new cpaas.ApplicationsConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//view application
connector.viewApplication({
    applicationSid: 'TestApplicationSid'
}).then(function(application){
    console.log(application.client_count);
});

//list applications
connector.listApplications({
    friendlyName: 'TestApplication',
    page: 0,
    pageSize: 10
}).then(function(applications){
   console.log(applications.total);
});

//create application
connector.createApplication({
    friendlyName: 'TestApplication',
    voiceUrl: 'voiceUrl',
    voiceMethod: enums.HttpMethod.POST,
    voiceFallbackUrl: 'voiceFallbackUrl',
    voiceFallbackMethod: enums.HttpMethod.GET,
    voiceCallerIdLookup: true,
    smsUrl: 'smsUrl',
    smsMethod: enums.HttpMethod.POST,
    smsFallbackUrl: 'smsFallbackUrl',
    smsFallbackMethod: enums.HttpMethod.GET,
    heartbeatUrl: 'heartbeatUrl',
    heartbeatMethod: enums.HttpMethod.GET,
    statusCallback: 'statusCallback',
    statusCallbackMethod: enums.HttpMethod.POST,
    hangupCallback: 'hangupCallback',
    hangupCallbackMethod: enums.HttpMethod.GET
}).then(function(newApplication) {
   console.log(newApplication.sid);
});

//update application
connector.updateApplication({
    applicationSid: 'TestApplicationSid',
    friendlyName: 'NewTestApplication',
}).then(function(updatedApplication) {
    console.log(updatedApplication.friendly_name);
});

//delete application
connector.deleteApplication({
    applicationSid: 'TestApplicationSid'
}).then(function(deletedApplication){
    console.log(deletedApplication.sid);
});