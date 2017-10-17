'use strict';
const expectation = require('./expectation');
const enums = require('../enums');
const TranscriptionsConnector = require('../connectors/transcriptions-connector');

const transcriptionsConnector = new TranscriptionsConnector({
    accountSid: 'TestAccountSid',
    authToken: 'TestToken'
});

describe('TranscriptionsTest', function () {
    beforeEach(function () {
        expectation.create(this.currentTest.parent);
    });

    describe('viewTranscription', function () {
        it('should return a transcription', function () {
            return transcriptionsConnector.viewTranscription({
                transcriptionSid: 'TestTranscriptionSid'
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('listTranscriptions', function () {
        it('should return a list of transcriptions', function () {
            return transcriptionsConnector.listTranscriptions({
                status: enums.TranscriptionStatus.COMPLETED,
                dateTranscribedGte: expectation.fromDate,
                dateTranscribedLt: expectation.toDate,
                page: 0,
                pageSize: 33
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('transcribeRecording', function () {
        it('should return a transcription', function () {
            return transcriptionsConnector.transcribeRecording({
                recordingSid: 'TestRecordingSid',
                transcribeCallback: 'TranscribeCallback',
                callbackMethod: enums.HttpMethod.GET,
                sliceStart: 0,
                sliceDuration: 33,
                quality: enums.TranscriptionQuality.HYBRID
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });

    describe('transcribeAudioUrl', function () {
        it('should return a transcription', function () {
            return transcriptionsConnector.transcribeAudioUrl({
                audioUrl: 'AudioUrl',
                transcribeCallback: 'TranscribeCallback',
                callbackMethod: enums.HttpMethod.GET,
                sliceStart: 0,
                sliceDuration: 33,
                quality: enums.TranscriptionQuality.AUTO
            }).then(data => {
                console.log(data);
                return data;
            });
        })
    });
});



