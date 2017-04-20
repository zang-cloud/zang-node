var zang = require('zang-node');

var connector = new zang.ApplicationClientsConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//view application client
connector.viewApplicationClient({
    applicationSid: 'TestApplicationSid',
    clientSid: 'TestApplicationClientSid'
}).then(function(applicationClient){
    console.log(applicationClient.nickname);
});

//list application clients
connector.listApplicationClients({
    accountSid: 'TestAccountSid',
    applicationSid: 'TestApplicationSid'
}).then(function(applicationClients){
   console.log(applicationClients.total);
});

//create application client
connector.createApplicationClient({
    applicationSid: 'TestApplicationSid',
    nickname: 'MyApplicationClient'
}).then(function(newApplicationClient) {
   console.log(newApplicationClient.sid);
});