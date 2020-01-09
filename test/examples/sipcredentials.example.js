var cpaas = require('@avaya/cpaas');

var connector = new cpaas.SipCredentialsConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//view credentials list
connector.viewCredentialsList({
    credentialsListSid: 'TestCredentialsListSid'
}).then(function (data) {
    console.log(data);
});

//list credentials lists
connector.listCredentialsLists({
    page: 0,
    pageSize: 10
}).then(function (data) {
    console.log(data);
});

//create credentials list
connector.createCredentialsList({
    friendlyName: 'MyCredentialsList'
}).then(function (data) {
    console.log(data);
});

//update credentials list
connector.updateCredentialsList({
    credentialsListSid: 'TestCredentialsListSid',
    friendlyName: 'NewCredentialsList'
}).then(function (data) {
    console.log(data);
});

//delete credentials list
connector.deleteCredentialsList({
    credentialsListSid: 'TestCredentialsListSid',
}).then(function (data) {
    console.log(data);
});

//view credential
connector.viewCredential({
    credentialsListSid: 'TestCredentialsListSid',
    credentialSid: 'TestCredentialSid'
}).then(function (data) {
    console.log(data);
});

//list credentials
connector.listCredentials({
    credentialsListSid: 'TestCredentialsListSid',
    page: 0,
    pageSize: 10
}).then(function (data) {
    console.log(data);
});

//create credential
connector.createCredential({
    credentialsListSid: 'TestCredentialsListSid',
    username: 'username',
    password: 'password'
}).then(function (data) {
    console.log(data);
});

//update credential
connector.updateCredential({
    credentialsListSid: 'TestCredentialsListSid',
    credentialSid: 'TestCredentialSid',
    password: 'password'
}).then(function (data) {
    console.log(data);
});

//delete credential
connector.deleteCredential({
    credentialsListSid: 'TestCredentialsListSid',
    credentialSid: 'TestCredentialSid'
}).then(function (data) {
    console.log(data);
});
