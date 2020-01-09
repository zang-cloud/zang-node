'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Calls connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function CallsConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * View information about a call.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.callSid] Call SID
     * @returns {Promise} Information about a call.
     */
    this.viewCall = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/Calls/${params.callSid}.json`
        });
    };

    /**
     * List and filter calls associated with an account
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.to] Filter by receiving number
     * @param {string} [params.from] Filter by calling number
     * @param {CallStatus} [params.status] Filter by status
     * @param {Date} [params.startTimeGte] Filter by start time greater or equal than
     * @param {Date} [params.startTimeLt] Filter by start time less than
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of calls
     */
    this.listCalls = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/Calls.json`,
            queryParams
        });
    };


    /**
     * Make a call
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.to Required. The phone number or SIP endpoint to call. Phone number should be in international format and one
     *           recipient per request. For e.g, to dial a number in the US, the To should be, +17325551212.
     *           SIP endpoints must be prefixed with sip: e.g sip:12345@sip.zang.io.
     * @param {string} params.from Required. The number to display as calling (i.e. Caller ID). The value does not have to be a real phone number
     *             or even in a valid format. For example, 8143 could be passed to the From parameter and would be
     *             displayed as the caller ID. Spoofed calls carry an additional charge.
     * @param {string} params.url Required. The URL requested once the call connects. This URL must be valid and should return InboundXML
     *            containing instructions on how to process your call. A badly formatted Url will NOT fallback to
     *            the FallbackUrl but return an error without placing the call. Url length is limited
     *            to 200 characters.
     * @param {HttpMethod} [params.method] The HTTP method used to request the URL once the call connects.
     * @param {string} [params.fallbackUrl] URL used if the required URL is unavailable or if any errors occur during execution of
     *                    the InboundXML returned by the required URL. Url length is limited to 200 characters.
     * @param {HttpMethod} [params.fallbackMethod] The HTTP method used to request the FallbackUrl once the call connects.
     * @param {string} [params.heartbeatUrl] A URL that will be requested every 60 seconds during the call, sending information about
     *                     the call. The HeartbeatUrl will NOT be requested unless at least 60 seconds of call time
     *                     have elapsed. URL length is limited to 200 characters.
     * @param {HttpMethod} [params.heartbeatMethod] The HTTP method used to request the HeartbeatUrl.
     * @param {string} [params.statusCallback] A URL that will be requested when the call connects and ends, sending information about
     *                       the call. URL length is limited to 200 characters.
     * @param {HttpMethod} [params.statusCallbackMethod] The HTTP method used to request the StatusCallback URL.
     * @param {string} [params.forwardedFrom] Specifies the Forwarding From number to pass to the carrier.
     * @param {string} [params.playDtmf] Dial digits or play tones using DTMF as soon as the call connects. Useful for navigating IVRs.
     *                 Allowed values for digits are 0-9, #, *, W, or w (W and w are for .5 second pauses), for example
     *                 142##* (spaces are valid). Tones follow the @1000 syntax, for example to play the tone 4 for two
     *                 seconds, 4@2000 (milliseconds) would be used.
     * @param {number} [params.timeout] Number of seconds call stays on line while waiting for an answer. The max time limit is 999.
     * @param {boolean} [params.hideCallerId] Specifies if the Caller ID will be blocked.
     * @param {boolean} [params.record] Specifies if this call should be recorded.
     * @param {string} [params.recordCallback] The URL some parameters regarding the recording will be passed to once it is completed.
     *                       The longer the recording time, the longer the process delay in returning the recording
     *                       information. If no RecordCallback is given, the recording will still be saved to the
     *                       system and available either in your Recording Logs or via a REST List Recordings request.
     *                       Url length is limited to 200 characters.
     * @param {HttpMethod} [params.recordCallbackMethod] The HTTP method used to request the RecordCallback.
     * @param {boolean} [params.transcribe] Specifies whether this call should be transcribed.
     * @param {string} [params.transcribeCallback] The URL some parameters regarding the transcription will be passed to once it is
     *                           completed. The longer the recording time, the longer the process delay in returning
     *                           the transcription information. If no TranscribeCallback is given, the recording will
     *                           still be saved to the system and available either in your Transcriptions Logs or via
     *                           a REST List Transcriptions request. Url length is limited to 200 characters.
     * @param {boolean} [params.straightToVoicemail] Specifies whether this call should be sent straight to the user's voicemail.
     * @param {IfMachine} [params.ifMachine] Specifies how Avaya CPaaS should handle this call if it goes to voicemail. Allowed values are
     *                  "continue" to proceed as normal, "redirect" to redirect the call to the ifMachineUrl, or
     *                  "hangup" to hang up the call. Hangup occurs when the tone is played. IfMachine accuracy is
     *                  around 90% and may not work in all countries.
     * @param {string} [params.ifMachineUrl] The URL Avaya CPaaS will redirect to for instructions if a voicemail machine is detected while the
     *                     IfMachine parameter is set to "redirect". Url length is limited to 200 characters.
     * @param {HttpMethod} [params.ifMachineMethod] The HTTP method used to request the IfMachineUrl.
     * @param {string} [params.sipAuthUsername] Your authenticated SIP username, used only for SIP calls.
     * @param {string} [params.sipAuthPassword] Your authenticated SIP password, used only for SIP calls.
     * @returns {Promise} Information about the created Call
     */
    this.makeCall = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Calls.json`,
            bodyParams
        });
    };

    /**
     * Send new instructions to a call.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.callSid SID of the call to send instructions to
     * @param {string} [params.url] The URL that in-progress calls will request for new instructions.
     * @param {HttpMethod} [params.method] The HTTP method used to request the redirect URL.
     * @param {EndCallStatus} [params.status] The status used to end the call. Allowed values are "canceled" for ending queued or ringing calls,
     *               and "completed" to end in-progress calls in addition to queued and ringing calls.
     * @returns {Promise} The Call to which new instructions are sent to.
     */
    this.interruptLiveCall = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.callSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Calls/${params.callSid}.json`,
            bodyParams
        });
    };

    /**
     * Use DTMF tones to mimic button presses.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.callSid The call to send digits to.
     * @param {string} [params.playDtmf] Allowed values are the digits 0-9, #, *, W, or w. "w" and "W"stand for 1/2 second pauses.
     *                 You can combine these values together, for example, "12ww34". Tones are also supported and
     *                 follow the @1000 syntax, for example to play the tone 4 for two seconds, 4@2000 (milliseconds)
     *                 would be used.
     * @param {string} [params.playDtmfDirection] Specifies which leg of the call DTMF tones will be played on. Allowed values are “in”
     *                          to send tones to the incoming caller or “out” to send tones to the out going caller.
     * @returns {Promise} The Call to which digits are sent to.
     */
    this.sendDigitsToLiveCall = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.callSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Calls/${params.callSid}.json`,
            bodyParams
        });
    };

    /**
     * Records a live call. Options include time limit, file format, trimming silence and transcribing.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.callSid SID of the call to be recorded.
     * @param {boolean} [params.record] Specifies if a call recording should start or end. Allowed values are "true" to start recording
     *               and "false" to end recording. Any number of simultaneous, separate recordings can be initiated.
     * @param {RecordingAudioDirection} [params.direction] Specifies which audio stream to record. Allowed values are "in" to record the incoming
     *                  caller's audio, "out" to record the outgoing caller's audio, and "both" to record both.
     * @param {number} [params.timeLimit] The maximum duration of the recording. Allowed value is an integer greater than 0.
     * @param {string} [params.callbackUrl] A URL that will be requested when the recording ends, sending information about the recording.
     *                    The longer the recording, the longer the delay in processing the recording and requesting
     *                    the CallbackUrl. Url length is limited to 200 characters.
     * @param {RecordingFileFormat} [params.fileFormat] Specifies the file format of the recording.
     * @param {boolean} [params.trimSilence] Trims all silence from the beginning of the recording.
     * @param {boolean} [params.transcribe] Specifies if the recording should be transcribed.
     * @param {TranscriptionQuality} [params.transcribeQuality] Specifies the quality of the transcription. Allowed values are "auto" for automated
     *                             transcriptions and "hybrid" for human-reviewed transcriptions.
     * @param {string} [params.transcribeCallback] A URL that will be requested when the call ends, sending information about the
     *                           transcription. The longer the recording, the longer the delay in processing the
     *                           transcription and requesting the TranscribeCallback. Url length is limited to
     *                           200 characters.
     * @returns {Promise} The Call for which recording is requested.
     */
    this.recordLiveCall = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.callSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Calls/${params.callSid}/Recordings.json`,
            bodyParams
        });
    };

    /**
     * Plays audio to a live call. Options include restricting to one caller and looping.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.callSid The call to play live audio to.
     * @param {string} [params.audioUrl] A URL returning the sound file to play. Progressive downloads and SHOUTCAST streaming are
     *                 also supported.
     * @param {RecordingAudioDirection} [params.direction] Specifies which caller will hear the played audio. Allowed values are "in" to play audio to
     *                  the incoming caller, "out" to play to the outgoing caller, and "both" to play the audio to both
     *                  callers.
     * @param {boolean} [params.loop] Specifies whether the audio will loop.
     * @returns {Promise} The Call live audio is played to.
     */
    this.playAudioToLiveCall = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.callSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Calls/${params.callSid}/Play.json`,
            bodyParams
        });
    };

    /**
     * Applies voice effect to the call.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.callSid SID of Call for which voice effects will be applied to
     * @param {AudioDirection} [params.audioDirection] Specifies which caller should have their voice modified. Allowed values are "in" for the
     *                  incoming caller and "out" for the outgoing caller. This value can be changed as often as you
     *                  like to control live call flow.
     * @param {number} [params.pitch] Sets the pitch. The lower the value, the lower the tone. Allowed values are integers greater than 0.
     * @param {number} [params.pitchSemiTones] Changes the pitch of audio in semitone intervals. Allowed values are integers between -14
     *                       and 14.
     * @param {number} [params.pitchOctaves] Changes the pitch of the audio in octave intervals. Allowed values are integers between
     *                     -1 and 1.
     * @param {number} [params.rate] Sets the rate. The lower the value, the lower the rate. Allowed values are integers greater than 0.
     * @param {number} [params.tempo] Sets the tempo. The lower the value, the slower the tempo. Allowed values are integers greater
     *              than 0.
     * @returns {Promise} The call voice effects are applied to.
     */
    this.applyVoiceEffect = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.callSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Calls/${params.callSid}/Effect.json`,
            bodyParams
        });
    };
}

module.exports = CallsConnector;