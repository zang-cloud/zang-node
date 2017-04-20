var zang = require('zang-node');

var connector = new zang.AccountsConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//view account
connector.viewAccount().then(function (account) {
    console.log(account.sid);
    console.log(account.friendly_name);
});

//update account
connector.updateAccount({
    friendlyName: 'friendlyname1'
}).then(function (updatedAccount) {
    console.log(updatedAccount.friendly_name);
}).catch(function (err) {
    console.log(err);
});