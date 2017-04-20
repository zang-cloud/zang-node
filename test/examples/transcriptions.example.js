var zang = require('zang-node');
var enums = zang.enums;

var connector = new zang.TranscriptionsConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//view transcription
connector.viewTranscription({
    transcriptionSid: 'TestTranscriptionSid'
}).then(function (data) {
    console.log(data);
});

//list transcriptions
connector.listTranscriptions({
    status: enums.TranscriptionStatus.COMPLETED,
    page: 0,
    pageSize: 40
}).then(function (data) {
    console.log(data);
});

//transcribe recording
connector.transcribeRecording({
    recordingSid: 'TestRecordingSid',
    transcribeCallback: 'TranscribeCallback',
    callbackMethod: enums.HttpMethod.GET,
    sliceStart: 0,
    sliceDuration: 33,
    quality: enums.TranscriptionQuality.HYBRID
}).then(function (data) {
    console.log(data);
});

//transcribe audio url
connector.transcribeAudioUrl({
    audioUrl: 'http://mydomain.com/myaudio.mp3',
    transcribeCallback: 'TranscribeCallback',
    callbackMethod: enums.HttpMethod.GET,
    sliceStart: 0,
    sliceDuration: 33,
    quality: enums.TranscriptionQuality.AUTO
}).then(function (data) {
    console.log(data);
});
    