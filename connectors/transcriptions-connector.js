'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Transcriptions connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function TranscriptionsConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * Shows info on a transcription.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.transcriptionSid Transcription SID
     * @returns {Promise} The requested Transcription.
     */
    this.viewTranscription = function (params) {
        params = params || {};
        return http.request(config, {
            accountSid: params.accountSid,
            path: `/Transcriptions/${params.transcriptionSid}.json`
        });
    };


    /**
     * Shows info on all transcriptions associated with an account.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {TranscriptionStatus} [params.status] Filter by transcriptions with a given status.
     * @param {Date} [params.dateTranscribedGte] Filter by date transcribed greater or equal than
     * @param {Date} [params.dateTranscribedLt] filter by date transcribed less than
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} A list of Transcriptions.
     */
    this.listTranscriptions = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            accountSid: params.accountSid,
            path: `/Transcriptions.json`,
            queryParams
        });
    };

    /**
     * Transcribes a recording.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.recordingSid] Recording SID
     * @param {string} [params.transcribeCallback] The URL some parameters regarding the transcription will be passed to once it is
     *                           completed. The longer the recording time, the longer the process delay in returning
     *                           the transcription information. If no TranscribeCallback is given, the recording will
     *                           still be saved to the system and available either in your Transcriptions Logs or via
     *                           a REST List Transcriptions request. URL length is limited to 200 characters.
     * @param {HttpMethod} [params.callbackMethod] The HTTP method used to request the TranscribeCallback.
     * @param {number} [params.sliceStart] Start point for slice transcription (in seconds).
     * @param {number} [params.sliceDuration] Duration of slice transcription (in seconds).
     * @param {TranscriptionQuality} [params.quality] Specifies the transcription quality. Transcription price differs for each quality tier.
     *                See pricing page for details. Allowed values are "auto", "hybrid" and "keywords", where "auto"
     *                is a machine-generated transcription, "hybrid" is reviewed by a human for accuracy and "keywords"
     *                returns topics and keywords for given audio file.
     * @returns {Promise} Information about the Transcription.
     */
    this.transcribeRecording = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.recordingSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Recordings/${params.recordingSid}/Transcriptions.json`,
            bodyParams
        });
    };

    /**
     * Transcribes a recording.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.audioUrl] URL where the audio to be transcribed is located.
     * @param {string} [params.transcribeCallback] The URL some parameters regarding the transcription will be passed to once it is
     *                           completed. The longer the recording time, the longer the process delay in returning
     *                           the transcription information. If no TranscribeCallback is given, the recording will
     *                           still be saved to the system and available either in your Transcriptions Logs or via
     *                           a REST List Transcriptions request. URL length is limited to 200 characters.
     * @param {HttpMethod} [params.callbackMethod] The HTTP method used to request the TranscribeCallback.
     * @param {number} [params.sliceStart] Start point for slice transcription (in seconds).
     * @param {number} [params.sliceDuration] Duration of slice transcription (in seconds).
     * @param {TranscriptionQuality} [params.quality] Specifies the transcription quality. Transcription price differs for each quality tier.
     *                See pricing page for details. Allowed values are "auto", "hybrid" and "keywords", where "auto"
     *                is a machine-generated transcription, "hybrid" is reviewed by a human for accuracy and "keywords"
     *                returns topics and keywords for given audio file.
     * @returns {Promise} Information about the Transcription.
     */
    this.transcribeAudioUrl = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Transcriptions.json`,
            bodyParams
        });
    };
}

module.exports = TranscriptionsConnector;