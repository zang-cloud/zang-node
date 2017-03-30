const connectors = require('../connectors');
var usagesConnector = new connectors.Usages({
    accountSid: 'account',
    authToken: 'token'
});
usagesConnector.viewUsage({
    usageSid: '123'
}).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});
