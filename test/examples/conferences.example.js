var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;

var connector = new cpaas.ConferencesConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//view conference
connector.viewConference({
    conferenceSid: 'TestConferenceSid'
}).then(function (data) {
    console.log(data);
});

//list conferences
connector.listConferences({
    status: enums.ConferenceStatus.COMPLETED,
    dateCreatedGte: new Date('2017-04-20'),
    page: 0,
    pageSize: 10
}).then(function (data) {
    console.log(data);
});

//view participant
connector.viewParticipant({
    conferenceSid: 'TestConferenceSid',
    participantSid: 'TestParticipantSid'
}).then(function (data) {
    console.log(data);
});

//list participants
connector.listParticipants({
    conferenceSid: 'TestConferenceSid',
    muted: false,
    deaf: false,
    page: 0,
    pageSize: 10
}).then(function (data) {
    console.log(data);
});

//deaf or mute participant
connector.deafOrMuteParticipant({
    conferenceSid: 'TestConferenceSid',
    participantSid: 'TestParticipantSid',
    muted: true,
    deaf: true
}).then(function (data) {
    console.log(data);
});

//play audio to participant
connector.playAudioToParticipant({
    conferenceSid: 'TestConferenceSid',
    participantSid: 'TestParticipantSid',
    audioUrl: 'http://mydomain.com/audio.mp3'
}).then(function (data) {
    console.log(data);
});

//hangup participant
connector.hangupParticipant({
    conferenceSid: 'TestConferenceSid',
    participantSid: 'TestParticipantSid'
}).then(function (data) {
    console.log(data);
});
