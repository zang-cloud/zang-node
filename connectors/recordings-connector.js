'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Recordings connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function RecordingsConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * Shows information about a Recording.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.recordingSid] Recording SID
     * @returns {Promise} Information about Recording.
     */
    this.viewRecording = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/Recordings/${params.recordingSid}.json`
        });
    };

    /**
     * Shows info on all recordings associated with an account.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.callSid] Call SID
     * @param {Date} [params.dateCreatedGte] Filter by date created greater than or equal.
     * @param {Date} [params.dateCreatedLt] Filter by date created less then.
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of Recordings.
     */
    this.listRecordings = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'GET',
            accountSid: params.accountSid,
            path: `/Recordings.json`,
            queryParams
        });
    };

    /**
     * Records a call.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.callSid Call SID
     * @param {boolean} [params.record] Specifies if a call recording should start or end. Any number of simultaneous, separate recordings
     *                 can be initiated.
     * @param {RecordingAudioDirection} [params.direction] Specifies which audio stream to record. Allowed values are "in" to record the incoming caller's
     *                 audio, "out" to record the outgoing caller's audio, and "both" to record both.
     * @param {number} [params.timeLimit] The maximum duration of the recording. Allowed value is an integer greater than 0.
     * @param {string} [params.callbackUrl] A URL that will be requested when the recording ends, sending information about the recording.
     *                 The longer the recording, the longer the delay in processing the recording and requesting
     *                 the CallbackUrl. Url length is limited to 200 characters.
     * @param {RecordingFileFormat} [params.fileFormat] Specifies the file format of the recording.
     * @param {boolean} [params.trimSilence] Trims all silence from the beginning of the recording.
     * @param {boolean} [params.transcribe] Specifies if the recording should be transcribed.
     * @param {TranscriptionQuality} [params.transcribeQuality] Specifies the quality of the transcription. Allowed values are "auto" for automated
     *                 transcriptions and "hybrid" for human-reviewed transcriptions.
     * @param {string} [params.transcribeCallback] A URL that will be requested when the call ends, sending information about the
     *                 transcription. The longer the recording, the longer the delay in processing the
     *                 transcription and requesting the TranscribeCallback. Url length is limited to
     *                 200 characters.
     * @returns {Promise} Information about the Recording.
     */
    this.recordCall = function (params) {
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
     * Deletes a recording.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.recordingSid Recording SID
     * @returns {Promise} The deleted Recording.
     */
    this.deleteRecording = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'DELETE',
            accountSid: params.accountSid,
            path: `/Recordings/${params.recordingSid}.json`
        });
    };
}

module.exports = RecordingsConnector;