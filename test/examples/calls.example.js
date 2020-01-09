var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;

var connector = new cpaas.Connectors({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
}).calls;

//view call
connector.viewCall({
    callSid: 'TestCallSid'
}).then(function (call) {
    console.log(call.duration);
});

//list calls
connector.listCalls({
    to: '+123456',
    from: '+654321',
    status: enums.CallStatus.COMPLETED,
    startTimeGte: new Date('2017-04-20'),
    startTimeLt: new Date('2017-04-21'),
    page: 0,
    pageSize: 10
}).then(function (data) {
    console.log(data);
});

//make call
connector.makeCall({
    to: '+123456',
    from: '+654321',
    url: 'TestUrl',
    method: enums.HttpMethod.GET,
    timeout: 122
}).then(function (call) {
    console.log(call.sid);
});

//interrupt live call
connector.interruptLiveCall({
    callSid: 'TestCallSid',
    url: 'TestUrl',
    method: enums.HttpMethod.GET,
    status: enums.EndCallStatus.CANCELED
}).then(function (data) {
    console.log(data);
});

//send digits to live call
connector.sendDigitsToLiveCall({
    callSid: 'TestCallSid',
    playDtmf: '0123#',
    playDtmfDirection: enums.AudioDirection.OUT
}).then(function (data) {
    console.log(data);
});

//record live call
connector.recordLiveCall({
    callSid: 'TestCallSid',
    record: true,
    direction: enums.RecordingAudioDirection.BOTH,
    timeLimit: 15,
    callbackUrl: 'TestUrl',
    fileFormat: enums.RecordingFileFormat.MP3
}).then(function (data) {
    console.log(data);

});


//play audio to live call
connector.playAudioToLiveCall({
    callSid: 'TestCallSid',
    audioUrl: 'AudioUrl',
    direction: enums.RecordingAudioDirection.BOTH,
    loop: true
}).then(function (data) {
    console.log(data);
});

//apply voice effect
connector.applyVoiceEffect({
    callSid: 'TestCallSid',
    audioDirection: enums.RecordingAudioDirection.OUT,
    pitch: 5,
    pitchSemiTones: 4,
    pitchOctaves: 3,
    rate: 2,
    tempo: 1
}).then(function (data) {
    console.log(data);
});
