var cpaas = require('@avaya/cpaas');

var connector = new cpaas.SipIpAccessControlListsConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//view ip access control list
connector.viewIpAccessControlList({
    ipAccessControlListSid: 'TestIpAccessControlListSid'
}).then(function (data) {
    console.log(data);
});

//list ip access control lists
connector.listIpAccessControlLists({
    page: 0,
    pageSize: 50
}).then(function (data) {
    console.log(data);
});

//create ip access control list
connector.createIpAccessControlList({
    friendlyName: 'MyIpAclList'
}).then(function (data) {
    console.log(data);
});

//update ip access control list
connector.updateIpAccessControlList({
    ipAccessControlListSid: 'TestIpAccessControlListSid',
    friendlyName: 'NewIpAclList'
}).then(function (data) {
    console.log(data);
});

//delete ip access control list
connector.deleteIpAccessControlList({
    ipAccessControlListSid: 'TestIpAccessControlListSid'
}).then(function (data) {
    console.log(data);
});

//view access control list ip
connector.viewAccessControlListIp({
    ipAccessControlListSid: 'TestIpAccessControlListSid',
    ipSid: 'TestIpAddressSid'
}).then(function (data) {
    console.log(data);
});

//list access control list ips
connector.listAccessControlListIps({
    ipAccessControlListSid: 'TestIpAccessControlListSid',
    page: 0,
    pageSize: 10
}).then(function (data) {
    console.log(data);
});

//add access control list ip
connector.addAccessControlListIp({
    ipAccessControlListSid: 'TestIpAccessControlListSid',
    friendlyName: 'MyIpAddress',
    ipAddress: '10.0.0.1'
}).then(function (data) {
    console.log(data);
});

//update access control list ip
connector.updateAccessControlListIp({
    ipAccessControlListSid: 'TestIpAccessControlListSid',
    ipSid: 'TestIpAddressSid',
    friendlyName: 'NewIpAddress',
    ipAddress: '10.0.0.2'
}).then(function (data) {
    console.log(data);
});

//delete access control list ip
connector.deleteAccessControlListIp({
    ipAccessControlListSid: 'TestIpAccessControlListSid',
    ipSid: 'TestIpAddressSid'
}).then(function (data) {
    console.log(data);
});
    