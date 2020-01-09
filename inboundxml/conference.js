'use strict';

const utils = require('./xml-utils');

/**
 * @module @avaya/cpaas/inboundxml/conference
 */

/**
 * Creates a Conference element.
 * @param {Object} params XML Node parameters.
 * @param {string} [params.name] The conference room name.
 * @param {boolean} [params.muted=false] Boolean value specifying if the conference should be muted.
 * @param {boolean} [params.beep=false] Boolean value specifying if a beep should play upon entrance to conference.
 * @param {boolean} [params.startConferenceOnEnter=false] Boolean value specifying if conference should begin upon entrance.
 * @param {boolean} [params.endConferenceOnExit=false] Boolean value specifying if conference should end upon a specific users exit.
 * @param {number} [params.maxParticipants=40] The maximum number of participants allowed in the conference call. Allowed Value: integer from 1 to 40.
 * @param {boolean} [params.hangupOnStar=false] should end the conference.
 * @param {string} [params.callbackUrl] URL where some parameters specific to <Conference> will be sent when participants enter and exit the conference and once it is completed. There is only one callbackUrl allowed per conference. The first callbackUrl will be the only one used.
 * @param {HttpMethod} [params.callbackMethod=POST] Method used to request the callback URL.
 * @param {HttpMethod} [params.method=POST] Method used to request the action URL.
 * @param {string} [params.waitSound] URL to inboundXML where conference participants can be sent to while they wait for entrance into the conference. Only <Play> method supported at this time.
 * @param {string} [params.digitsMatch] Specifies digits that CPaaS should listen for and send to the callbackUrl if a caller inputs them. Separate additional digits or digit patterns with a comma. Allowed Value: Pattern made up of the digits 0-9, #, or *.
 * @param {boolean} [params.stayAlone=false] Boolean value specifying if the caller should stay alone in the conference call.
 * @param {boolean} [params.record=false] Boolean value specifying if the conference should be recorded.
 * @param {RecordingFileFormat} [params.recordFileFormat=MP3] File format in which the recording will be saved in.
 * @param {string} [params.recordCallbackUrl] URL to sound that the recording will be sent to from the conference.
 * @param {HttpMethod} [params.recordCallbackMethod]
 * @param {HttpMethod} [params.waitMethod]
 * @param {HttpMethod} [params.waitSoundMethod]
 * @param {string} [params.waitUrl]
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Conference',
        contentParam: 'name',
        data: params
    });
};


