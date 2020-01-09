var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;

var connector = new cpaas.IncomingPhoneNumbersConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//view domain
connector.viewDomain({
    domainSid: 'TestDomainSid'
}).then(function (data) {
    console.log(data);
});

//list domains
connector.listDomains({
    page: 0,
    pageSize: 10
}).then(function (data) {
    console.log(data);
});

//create domain
connector.createDomain({
    accountSid: 'TestAccountSid',
    domainName: 'mydomain.com',
    friendlyName: 'MyDomain',
    voiceUrl: 'VoiceUrl',
    voiceMethod: enums.HttpMethod.POST,
    voiceFallbackUrl: 'VoiceFallbackUrl',
    voiceFallbackMethod: enums.HttpMethod.GET,
    heartbeatUrl: 'HeartbeatUrl',
    heartbeatMethod: enums.HttpMethod.POST,
    voiceStatusCallback: 'VoiceStatusCallback',
    voiceStatusCallbackMethod: enums.HttpMethod.GET
}).then(function (data) {
    console.log(data);
});

//update domain
connector.updateDomain({
    accountSid: 'TestAccountSid',
    domainSid: 'TestDomainSid',
    friendlyName: 'MyDomain',
    voiceUrl: 'VoiceUrl',
    voiceMethod: enums.HttpMethod.POST,
    voiceFallbackUrl: 'VoiceFallbackUrl',
    voiceFallbackMethod: enums.HttpMethod.GET,
    heartbeatUrl: 'HeartbeatUrl',
    heartbeatMethod: enums.HttpMethod.POST,
    voiceStatusCallback: 'VoiceStatusCallback',
    voiceStatusCallbackMethod: enums.HttpMethod.GET
}).then(function (data) {
    console.log(data);
});

//delete domain
connector.deleteDomain({
    domainSid: 'TestDomainSid'
}).then(function (data) {
    console.log(data);
});

//list mapped credentials lists
connector.listMappedCredentialsLists({
    domainSid: 'TestDomainSid',
    page: 0,
    pageSize: 10
}).then(function (data) {
    console.log(data);
});

//map credentials list
connector.mapCredentialsList({
    domainSid: 'TestDomainSid',
    credentialListSid: 'TestCredentialsListSid'
}).then(function (data) {
    console.log(data);
});

//delete mapped credentials list
connector.deleteMappedCredentialsList({
    domainSid: 'TestDomainSid',
    credentialsListSid: 'TestCredentialsListSid'
}).then(function (data) {
    console.log(data);
});

//list mapped ip acls
connector.listMappedIpAccessControlLists({
    domainSid: 'TestDomainSid',
    page: 0,
    pageSize: 10
}).then(function (data) {
    console.log(data);
});

//map ip acl
connector.mapIpAccessControlList({
    domainSid: 'TestDomainSid',
    ipAccessControlListSid: 'TestIpAccessControlListSid'
}).then(function (data) {
    console.log(data);
});

//delete mapped ip acl
connector.deleteMappedIpAccessControlList({
    domainSid: 'TestDomainSid',
    accessControlListSid: 'TestIpAccessControlListSid'
}).then(function (data) {
    console.log(data);
});
