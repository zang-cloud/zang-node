'use strict';
const enums = require('../enums');
const ix = require('../inboundxml');

describe('SimpleInboundXmlTest', function () {
    it('should generate simple xml', function () {
        let xmlDefinition = ix.response({
            content: [
                ix.getspeech({
                    method: enums.HttpMethod.GET,
                    grammar: 'grammar',
                    playBeep: true,
                    timeout: 12,
                    action: 'http://action.com',
                    content: [
                        ix.play({
                            loop: 12,
                            method: enums.HttpMethod.GET,
                            url: 'http://myurl.com'
                        }),
                        ix.pause({
                            length: 12
                        }),
                        ix.say({
                            language: enums.Language.DE,
                            loop: 12,
                            text: 'Hello',
                            voice: enums.Voice.FEMALE
                        })
                    ]
                }),
                ix.dial({
                    method: enums.HttpMethod.GET,
                    timeout: 12,
                    hangupOnStar: true,
                    timeLimit: 122,
                    callerId: '123',
                    hideCallerId: false,
                    callerName: 'Rocky Balboa',
                    dialMusic: 'music.mp3',
                    callbackUrl: 'callback',
                    callbackMethod: enums.HttpMethod.GET,
                    confirmSound: 'sound.mp3',
                    digitsMatch: '123',
                    straightToVm: false,
                    heartbeatUrl: 'heartbeat',
                    heartbeatMethod: enums.HttpMethod.GET,
                    action: 'action',
                    forwardedFrom: '564',
                    record: true,
                    recordDirection: enums.RecordingAudioDirection.IN,
                    recordCallbackUrl: 'recordcallback',
                    recordLifetime: 33,
                    recordFormat: enums.RecordingFileFormat.MP3,
                    ifMachine: enums.IfMachine.CONTINUE,
                    ifMachineMethod: enums.HttpMethod.GET,
                    ifMachineUrl: 'ifmachineurl',
                    outboundAction: true,
                    content: [
                        ix.conference({
                            name: 'My conference',
                            muted: false,
                            beep: true,
                            startConferenceOnEnter: true,
                            endConferenceOnExit: true,
                            maxParticipants: 12,
                            waitSound: 'waitsound.mp3',
                            hangupOnStar: true,
                            callbackMethod: enums.HttpMethod.GET,
                            callbackUrl: 'callback',
                            digitsMatch: '222',
                            stayAlone: true,
                            record: true,
                            recordCallbackUrl: 'recordcallback',
                            recordCallbackMethod: enums.HttpMethod.GET,
                            recordFileFormat: enums.RecordingFileFormat.MP3,
                            method: enums.HttpMethod.GET,
                            waitMethod: enums.HttpMethod.GET,
                            waitSoundMethod: enums.HttpMethod.POST,
                            waitUrl: 'waiturl'
                        }),
                        ix.number({
                            number: '123',
                            method: enums.HttpMethod.GET,
                            sendDigits: '123',
                            sendOnPreanswer: true,
                            url: 'url'
                        }),
                        ix.sip({
                            action: 'action',
                            method: enums.HttpMethod.GET,
                            password: 'pass',
                            sendDigits: '123',
                            sipAddress: 'sip',
                            username: 'username'
                        })
                    ]
                }),
                ix.hangup({
                    reason: enums.RejectReason.BUSY,
                    schedule: 12
                }),
                ix.ping({
                    method: enums.HttpMethod.GET,
                    url: 'ping.com'
                }),
                ix.record(),
                ix.reject({
                    reason: enums.RejectReason.BUSY
                }),
                ix.redirect({
                    method: enums.HttpMethod.GET,
                    url: 'redirect.com'
                }),
                ix.gather({
                    action: 'action',
                    finishOnKey: '#',
                    method: enums.HttpMethod.POST,
                    numDigits: 12,
                    timeout: 24,
                    input: enums.Input.SPEECH_DTMF,
                    hints: "search",
                    language: enums.BCPLanguage.EN_US,
                    content: [
                        ix.pause(),
                        ix.play(),
                        ix.playlastrecording(),
                        ix.say({
                            language: enums.Language.EN,
                            text: 'Plese enter 4 digit pin',
                            voice: enums.Voice.FEMALE
                        })
                    ]
                }),
                ix.sms({
                    action: 'action',
                    method: enums.HttpMethod.POST,
                    from: '+123',
                    statusCallback: 'statuscallback',
                    statusCallbackMethod: enums.HttpMethod.GET,
                    to: '+12312',
                    text: 'Hello'
                }),
                ix.mms({
                    action: 'action',
                    method: enums.HttpMethod.POST,
                    from: '+123',
                    statusCallback: 'statuscallback',
                    to: '+12312',
                    text: 'This is a test MMS from Avaya OneCloud CPaaS!',
                    mediaUrl: 'https://tinyurl.com/lpewlmo'
                }),
                ix.record({
                    action: 'action',
                    method: enums.HttpMethod.POST,
                    timeout: 12,
                    finishOnKey: '$',
                    maxLength: 22,
                    transcribe: true,
                    transcribeCallback: 'trcallback',
                    transcribeQuality: enums.TranscriptionQuality.AUTO,
                    sliceStart: 12,
                    sliceDuration: 22,
                    playBeep: true,
                    bothLegs: true,
                    fileFormat: enums.RecordingFileFormat.WAV,
                    direction: enums.RecordingAudioDirection.BOTH,
                    background: true,
                    sampleRate: enums.SamplingRate.SR_32000,
                    trimSilence: true,
                    lifetime: 33
                })
            ]
        });
        ix.build(xmlDefinition).then(xml => console.log(xml));
    });

});
