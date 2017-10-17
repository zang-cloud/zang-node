'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).conferences;

describe('ConferencesTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('viewConference', function () {
        it('should return conference', function () {
            return connector.viewConference({
                conferenceSid: 'TestConferenceSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listConferences', function () {
        it('should return a list of conferences', function () {
            return connector.listConferences({
                status: enums.ConferenceStatus.COMPLETED,
                dateCreatedGte: expectation.fromDate,
                dateCreatedLt: expectation.toDate,
                dateUpdatedGte: expectation.fromDate,
                dateUpdatedLt: expectation.toDate,
                page: 0,
                pageSize: 10
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('viewParticipant', function () {
        it('should return a participant', function () {
            return connector.viewParticipant({
                conferenceSid: 'TestConferenceSid',
                participantSid: 'TestParticipantSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listParticipants', function () {
        it('should return a list of participants', function () {
            return connector.listParticipants({
                conferenceSid: 'TestConferenceSid',
                muted: false,
                deaf: false,
                page: 0,
                pageSize: 10
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('muteDeafParticipant', function () {
        it('should return a participant', function () {
            return connector.deafOrMuteParticipant({
                conferenceSid: 'TestConferenceSid',
                participantSid: 'TestParticipantSid',
                muted: true,
                deaf: true
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('playAudioToParticipant', function () {
        it('should return a participant', function () {
            return connector.playAudioToParticipant({
                conferenceSid: 'TestConferenceSid',
                participantSid: 'TestParticipantSid',
                audioUrl: 'http://mydomain.com/audio.mp3'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('hangupParticipant', function () {
        it('should return a participant', function () {
            return connector.hangupParticipant({
                conferenceSid: 'TestConferenceSid',
                participantSid: 'TestParticipantSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

});



