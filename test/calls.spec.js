'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).calls;

describe('CallsTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('viewCall', function () {
        it('should return a call', function () {
            return connector.viewCall({
                callSid: 'TestCallSid',
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listCalls', function () {
        it('should return a list of calls', function () {
            return connector.listCalls({
                to: '+123456',
                from: '+654321',
                status: enums.CallStatus.COMPLETED,
                startTimeGte: expectation.fromDate,
                startTimeLt: expectation.toDate,
                page: 0,
                pageSize: 10
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('makeCall', function () {
        it('should return a call', function () {
            return connector.makeCall({
                to: '+123456',
                from: '+654321',
                url: 'TestUrl',
                method: enums.HttpMethod.GET,
                fallbackUrl: 'FallbackUrl',
                fallbackMethod: enums.HttpMethod.POST,
                statusCallback: 'StatusCallback',
                statusCallbackMethod: enums.HttpMethod.GET,
                heartbeatUrl: 'HeartbeatUrl',
                heartbeatMethod: enums.HttpMethod.GET,
                forwardedFrom: '1234',
                playDtmf: '123#',
                timeout: 122,
                hideCallerId: true,
                record: true,
                recordCallback: 'RecordCallback',
                recordCallbackMethod: enums.HttpMethod.GET,
                transcribe: true,
                transcribeCallback: 'TranscribeCallback',
                straightToVoicemail: true,
                ifMachine: enums.IfMachine.REDIRECT,
                ifMachineUrl: 'IfMachineUrl',
                ifMachineMethod: enums.HttpMethod.GET,
                sipAuthUsername: 'username',
                sipAuthPassword: 'password'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('interruptLiveCall', function () {
        it('should return a call', function () {
            return connector.interruptLiveCall({
                callSid: 'TestCallSid',
                url: 'TestUrl',
                method: enums.HttpMethod.GET,
                status: enums.EndCallStatus.CANCELED,
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('sendDigitsToLiveCall', function () {
        it('should return a call', function () {
            return connector.sendDigitsToLiveCall({
                callSid: 'TestCallSid',
                playDtmf: '0123#',
                playDtmfDirection: enums.AudioDirection.OUT
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('recordLiveCall', function () {
        it('should return a call', function () {
            return connector.recordLiveCall({
                callSid: 'TestCallSid',
                record: true,
                direction: enums.RecordingAudioDirection.BOTH,
                timeLimit: 15,
                callbackUrl: 'TestUrl',
                fileFormat: enums.RecordingFileFormat.MP3,
                trimSilence: true,
                transcribe: true,
                transcribeQuality: enums.TranscriptionQuality.HYBRID,
                transcribeCallback: 'TestTranscribeUrl'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('playAudioToLiveCall', function () {
        it('should return a call', function () {
            return connector.playAudioToLiveCall({
                callSid: 'TestCallSid',
                audioUrl: 'AudioUrl',
                direction: enums.RecordingAudioDirection.BOTH,
                loop: true
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('applyVoiceEffect', function () {
        it('should return a call', function () {
            return connector.applyVoiceEffect({
                callSid: 'TestCallSid',
                audioDirection: enums.RecordingAudioDirection.OUT,
                pitch: 5,
                pitchSemiTones: 4,
                pitchOctaves: 3,
                rate: 2,
                tempo: 1
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

});



