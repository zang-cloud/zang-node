'use strict';
const Connectors = require('../connectors');
const expect = require('chai').expect;

const cf = new Connectors({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

const sipCredentialsConnector = cf.sipCredentials;

function deleteCredentials() {
    return sipCredentialsConnector.listCredentialsLists().then(function(cls){
        let deletePromises = [];
        console.log('delete');
        cls.credential_lists.forEach(cl => {
            if (cl.friendly_name === 'MyCredentialsList' || cl.friendly_name === 'MyCredentialsList2') {
                deletePromises.push(sipCredentialsConnector.deleteCredentialsList({credentialsListSid: cl.sid}).then(function(){
                    console.log('Deleting', cl.sid);
                }));
            }
        });
        return Promise.all(deletePromises);
    });
}

describe('Sip integration tests', function () {

    describe('test sip credentials', function () {
        it('should test sip credentials', function () {
            return deleteCredentials().then(function(){
                return sipCredentialsConnector.createCredentialsList({
                    friendlyName: 'MyCredentialsList'
                }).then(function(cl){
                    console.log(cl);
                    return sipCredentialsConnector.createCredential({
                        credentialsListSid: cl.sid,
                        username: 'testuser123',
                        password: '34AS3!#$asfe'
                    }).then(function(cr){
                        console.log(cr);
                        return sipCredentialsConnector.viewCredentialsList({
                            credentialsListSid: cl.sid
                        }).then(function(cl2){
                            console.log(cl2);
                           return sipCredentialsConnector.viewCredential({
                               credentialsListSid: cl.sid,
                               credentialSid: cr.sid
                           }).then(function(cr2){
                               console.log(cr2);
                               expect(cr.username).to.equal("testuser123");
                               expect(cr2.username).to.equal("testuser123");
                               expect(cl.friendly_name).to.equal("MyCredentialsList");
                               expect(cl2.friendly_name).to.equal("MyCredentialsList");
                           })
                        });
                    });
                });
            });
        })
    });
});



