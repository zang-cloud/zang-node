var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;

var connector = new cpaas.RecordingsConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});


//view recording
connector.viewRecording({
    recordingSid: 'TestRecordingSid'
}).then(function (data) {
    console.log(data);
});

//list recordings
connector.listRecordings({
    callSid: 'TestCallSid',
    page: 0,
    pageSize: 10
}).then(function (data) {
    console.log(data);
});

//record call
connector.recordCall({
    callSid: 'TestCallSid',
    record: true,
    direction: enums.RecordingAudioDirection.OUT,
    timeLimit: 1337,
    callbackUrl: 'CallbackUrl',
    fileFormat: enums.RecordingFileFormat.WAV
}).then(function (data) {
    console.log(data);
});

//delete recording
connector.deleteRecording({
    recordingSid: 'TestRecordingSid'
}).then(function (data) {
    console.log(data);
});
