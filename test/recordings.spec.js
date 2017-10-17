'use strict';
const expectation = require('./expectation');
const Connectors = require('../connectors');
const enums = require('../enums');

const connector = new Connectors({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
}).recordings;

describe('RecordingsTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('viewRecording', function () {
        it('should return a recording', function () {
            return connector.viewRecording({
                recordingSid: 'TestRecordingSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listRecordings', function () {
        it('should return a list of recordings', function () {
            return connector.listRecordings({
                callSid: 'TestCallSid',
                dateCreatedGte: expectation.fromDate,
                dateCreatedLt: expectation.toDate,
                page: 0,
                pageSize: 33
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('recordCall', function () {
        it('should return a recording', function () {
            return connector.recordCall({
                callSid: 'TestCallSid',
                record: true,
                direction: enums.RecordingAudioDirection.OUT,
                timeLimit: 1337,
                callbackUrl: 'CallbackUrl',
                fileFormat: enums.RecordingFileFormat.WAV,
                trimSilence: true,
                transcribe: true,
                transcribeQuality: enums.TranscriptionQuality.HYBRID,
                transcribeCallback: 'TranscribeCallback'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('deleteRecording', function () {
        it('should return a recording', function () {
            return connector.deleteRecording({
                recordingSid: 'TestRecordingSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

});



