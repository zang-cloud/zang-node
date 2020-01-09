'use strict';

const utils = require('./xml-utils');

/**
 * @module @avaya/cpaas/inboundxml/dial
 */

/**
 * Creates a Conference element.
 * @param {Object} params XML Node parameters.
 * @param {Object[]} [params.content] Specify child elements of the Dial element. Allowed elements are: Conference, Number, Sip
 * @param {string} [params.action] URL where some parameters specific to <Dial> will be sent for further processing. The calling party can be redirected here upon the hangup of the B leg caller.
 * @param {HttpMethod} [params.method=POST] Method used to request the action URL.
 * @param {number} [params.timeout]
 * @param {boolean} [params.hangupOnStar]
 * @param {string} [params.timeLimit=14400] The duration in seconds a call made through <Dial> should occur for before ending. Allowed Value: integer greater than or equal to 1.
 * @param {string} [params.callerId] Number to display as calling. Defaults to the ID of phone being used.
 * @param {boolean} [params.hideCallerId=false] Boolean value specifying if the caller ID should be hidden or not.
 * @param {string} [params.callerName]
 * @param {string} [params.dialMusic] URL to an InboundXML document to be executed in place of the call ringtone (a <Say> or <Play> would be appropriate in this document).
 * @param {string} [params.callbackUrl] URL requested when the dialed call connects and ends. Note that this URL only receives parameters containing information about the call, the call does not execute XML given as a callbackUrl.
 * @param {HttpMethod} [params.callbackMethod=POST] Method used to request the callback URL.
 * @param {string} [params.confirmSound] The URL that Avaya CPaaS should reach out to when the called party answers. The URL should return InboundXML containing <Play>, <Pause>, and/or <Say> elements only. Any other elements will be ignored.
 * @param {string} [params.digitsMatch] Specifies digits that Avaya CPaaS should listen for and send to the callbackUrl if a caller inputs them. Separate additional digits or digit patterns with a comma. Allowed Value: Pattern made up of the digits 0-9, #, or *.
 * @param {boolean} [params.straightToVm=false] Boolean value specifying if call should be redirected to voicemail immediately. Note: only works if dialing TO a mobile number.
 * @param {string} [params.heartbeatUrl] A URL Avaya CPaaS can request every 60 seconds during the call to notify of elapsed time and pass other general information.
 * @param {HttpMethod} [params.heartbeatMethod=POST] Method used to request the heartbeatUrl.
 * @param {string} [params.forwardedFrom] Specifies the number to list the call as forwarded from.
 * @param {boolean} [params.record] Specifies if this call should be recorded.
 * @param {RecordingAudioDirection} [params.recordDirection=BOTH] Specifies which stream of call audio to record. “in” to record the incoming caller audio, “out” to record the outgoing caller audio, or “both” to record all audio on the call. “out” audio can only be captured if an outbound <Dial> is performed during the call. “in” blocks any subsequent InboundXML elements until the inbound audio recording is finished (via finishOnKey or timeout).
 * @param {string} [params.recordCallbackUrl] URL where some parameters specific to the recording will be sent for further processing.
 * @param {number} [params.recordLifetime]
 * @param {RecordingFileFormat} [params.recordFormat]
 * @param {IfMachine} [params.ifMachine=CONTINUE] Specifies how Avaya CPaaS should handle this dial if the receiving phone number is unanswered and goes to voicemail. “continue” to proceed as normal, “redirect” to redirect the call to the ifMachineUrl, or “hangup” to hangup the call. Please note: ifMachine could detect an answering machine via the tone stream. Therefore, the accuracy is around 90% and may not work in all countries. Allowed Value: continue, redirect, hangup.
 * @param {string} [params.ifMachineUrl] The URL Avaya CPaaS will redirect to if a voicemail machine is detected while the ifMachine=“redirect” attribute is set.
 * @param {HttpMethod} [params.ifMachineMethod=POST] The method used to request the ifMachineUrl.
 * @param {boolean} [params.outboundAction]
 * @returns {Object} XML element
 */
module.exports = function createElement(params) {
    return utils.createNode({
        name: 'Dial',
        contentParam: 'content',
        data: params
    });
};


