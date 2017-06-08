'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).sipIpAccessControlLists;

describe('SipAclTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('viewIpAcl', function () {
        it('should return ip access control list', function () {
            return connector.viewIpAccessControlList({
                ipAccessControlListSid: 'TestIpAccessControlListSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listIpAcls', function () {
        it('should return a list of ip access control lists', function () {
            return connector.listIpAccessControlLists({
                page: 0,
                pageSize: 50
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('createIpAcl', function () {
        it('should return ip access control list', function () {
            return connector.createIpAccessControlList({
                friendlyName: 'MyIpAclList'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('updateIpAcl', function () {
        it('should return ip access control list', function () {
            return connector.updateIpAccessControlList({
                ipAccessControlListSid: 'TestIpAccessControlListSid',
                friendlyName: 'NewIpAclList'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('deleteIpAcl', function () {
        it('should return ip access control list', function () {
            return connector.deleteIpAccessControlList({
                ipAccessControlListSid: 'TestIpAccessControlListSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('viewAclIp', function () {
        it('should return acl ip address', function () {
            return connector.viewAccessControlListIp({
                ipAccessControlListSid: 'TestIpAccessControlListSid',
                ipSid: 'TestIpAddressSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listAclIps', function () {
        it('should return a list of acl ip addresses', function () {
            return connector.listAccessControlListIps({
                ipAccessControlListSid: 'TestIpAccessControlListSid',
                page: 0,
                pageSize: 10
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('addAclIp', function () {
        it('should return acl ip address', function () {
            return connector.addAccessControlListIp({
                ipAccessControlListSid: 'TestIpAccessControlListSid',
                friendlyName: 'MyIpAddress',
                ipAddress: '10.0.0.1'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('updateAclIp', function () {
        it('should return acl ip address', function () {
            return connector.updateAccessControlListIp({
                ipAccessControlListSid: 'TestIpAccessControlListSid',
                ipSid: 'TestIpAddressSid',
                friendlyName: 'NewIpAddress',
                ipAddress: '10.0.0.2'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('deleteAclIp', function () {
        it('should return acl ip address', function () {
            return connector.deleteAccessControlListIp({
                ipAccessControlListSid: 'TestIpAccessControlListSid',
                ipSid: 'TestIpAddressSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

});



