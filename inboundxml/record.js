'use strict';

/**
 * @module @avaya/cpaas/inboundxml/record
 */

const utils = require('./xml-utils');

/**
 * Creates a Record element.
 * @param {Object} params XML Node parameters.
 * @param {string} [params.action] URL where some parameters specific to <Record> will be sent for further processing.
 * @param {HttpMethod} [params.method=POST] Method used to request the action URL.
 * @param {number} [params.timeout=5] The number of seconds <Record> should wait during silence before ending. Default timeout value is 5 seconds. Valid value is integer greater than or equal to 0.
 * @param {string} [params.finishOnKey=#] The key a caller can press to end the <Record>. Default value is #. Allowed values are digits from 0 to 9, # or *.
 * @param {number} [params.maxLength=3600] The maximum length in seconds a recording should be. Default Value: 3600. Allowed Value: integer greater than or equal to 0
 * @param {boolean} [params.transcribe=false] Boolean value specifying if the recording should be transcribed. Default Value: false.
 * @param {TranscriptionQuality} [params.transcribeQuality=AUTO] Specifies the quality used to process the transcription. Default Value: auto
 * @param {string} [params.transcribeCallback] A URL some parameters regarding the transcription will be passed to once it is completed. Allowed Value: Valid URL.
 * @param {boolean} [params.playBeep=false] Boolean value specifying if a beep should be played when the recording begins. Default Value: false.
 * @param {RecordingFileFormat} [params.fileFormat=MP3] The recording file format. Can be mp3 or wav. Default is mp3. Default Value: mp3.
 * @param {RecordingAudioDirection} [params.direction=BOTH] Specifies which stream of call audio to record. “in” to record the incoming caller audio, “out” to record the out going caller audio, or “both” to record all audio on the call. “out” audio can only be captured if an outbound Dial is performed during the call. “in” blocks any subsequent XML elements until the inbound audio recording is finished (via finishOnKey or timeout). Default Value: both.
 * @param {boolean} [params.background=true] Begin recording the call while continuing the execution of any other present InboundXML in the background (true) or block the execution of subsequent InboundXML until the record element finishes (via finishOnKey or timeout). Note that the timeout, finishOnKey, and playBeep attributes have no effect when the background is set to true. Default Value: true.
 * @param {boolean} [params.trimSilence=false] Trims all silence from the beginning of the recording. Allowed values are "true" or "false" - any other value will default to "false".
 * @param {number} [params.lifetime]
 * @param {number} [params.sliceStart]
 * @param {number} [params.sliceDuration]
 * @param {number} [params.bothLegs]
 * @param {SamplingRate} [params.sampleRate]
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Record',
        data: params
    });
};


