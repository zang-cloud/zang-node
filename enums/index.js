'use strict';

/**
 * @module zang-node/enums
 */

module.exports = {
    /** @type {AnsweredBy} */
    AnsweredBy: require('./answeredby'),
    AudioDirection: require('./audiodirection'),
    AuthType: require('./authtype'),
    AvailableNumberType: require('./availablenumbertype'),
    CallDirection: require('./calldirection'),
    CallStatus: require('./callstatus'),
    ConferenceStatus: require('./conferencestatus'),
    EndCallStatus: require('./endcallstatus'),
    FraudControlType: require('./fraudcontroltype'),
    HttpMethod: require('./httpmethod'),
    IfMachine: require('./ifmachine'),
    LogLevel: require('./loglevel'),
    PhoneNumberType: require('./phonenumbertype'),
    PresenceStatus: require('./presencestatus'),
    Product: require('./products'),
    RecordingAudioDirection: require('./recordingaudiodirection'),
    RecordingFileFormat: require('./recordingfileformat'),
    SmsDirection: require('./smsdirection'),
    TranscriptionQuality: require('./transcriptionquality'),
    TranscriptionStatus: require('./transcriptionstatus'),

    Language: require('./language'),
    RejectReason: require('./rejectreason'),
    SamplingRate: require('./samplingrate'),
    Voice: require('./voice')
};