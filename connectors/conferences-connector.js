'use strict';

const basicConfiguration = require('../configuration');
const _ = require('lodash');
const http = require('../http');
const utils = require('./connector-utils');

/**
 * Creates a new Conferences connector.
 * @param {APIConfiguration} configuration connector configuration parameters
 * @constructor
 */
function ConferencesConnector(configuration) {
    const config = basicConfiguration.getConfiguration(_.cloneDeep(configuration));

    /**
     * Shows information about a conference.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.conferenceSid SID of the conference for which you want to retrieve information
     * @returns {Promise} Information about the Conference.
     */
    this.viewConference = function (params) {
        params = params || {};
        return http.request(config, {
            accountSid: params.accountSid,
            path: `/Conferences/${params.conferenceSid}.json`
        });
    };


    /**
     * List conferences associated with an account.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} [params.friendlyName] Filter by Friendly Name
     * @param {ConferenceStatus} [params.status] Filter by status
     * @param {Date} [params.dateCreatedGte] Filter by date created greater or equal than
     * @param {Date} [params.dateCreatedLt] Filter by date created less than
     * @param {Date} [params.dateUpdatedGte] Filter by date updated greater or equal than
     * @param {Date} [params.dateUpdatedLt] Filter by date updated less than
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of Conferences.
     */
    this.listConferences = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        return http.request(config, {
            accountSid: params.accountSid,
            path: `/Conferences.json`,
            queryParams
        });
    };

    /**
     * Shows information about a Conference participant
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.conferenceSid SID of conference a participant is a part of
     * @param {string} params.participantSid SID of the participant
     * @returns {Promise} Information about a Participant.
     */
    this.viewParticipant = function(params) {
        params = params || {};
        return http.request(config, {
            accountSid: params.accountSid,
            path: `/Conferences/${params.conferenceSid}/Participants/${params.participantSid}.json`
        });
    };

    /**
     * List participants in a conference.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.conferenceSid Conference SID
     * @param {boolean} [params.muted] Filter only muted participants
     * @param {boolean} [params.deaf] Filter only deaf participants
     * @param {number} [params.page] Page to return
     * @param {number} [params.pageSize] Number of items to return per page
     * @returns {Promise} List of Participants.
     */
    this.listParticipants = function (params) {
        params = params || {};
        let queryParams = utils.prepareParams(params);
        delete queryParams.conferenceSid;
        return http.request(config, {
            accountSid: params.accountSid,
            path: `/Conferences/${params.conferenceSid}/Participants.json`,
            queryParams
        });
    };

    /**
     * Set status of participant in a conference to muted or deaf
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.conferenceSid Conference SID
     * @param {string} params.participantSid Participant SID
     * @param {boolean} [params.muted] Specifies whether the participant should be muted.
     * @param {boolean} [params.deaf] Specifies whether the participant should be deaf.
     * @returns {Promise} Participant in question.
     */
    this.deafOrMuteParticipant = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.conferenceSid;
        delete bodyParams.participantSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Conferences/${params.conferenceSid}/Participants/${params.participantSid}.json`,
            bodyParams
        });
    };

    /**
     * Hangs up a conference participant.
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.conferenceSid Conference SID
     * @param {string} params.participantSid Participant SID
     * @returns {Promise} Participant in question.
     */
    this.hangupParticipant = function (params) {
        params = params || {};
        return http.request(config, {
            method: 'DELETE',
            accountSid: params.accountSid,
            path: `/Conferences/${params.conferenceSid}/Participants/${params.participantSid}.json`
        });
    };

    /**
     * Plays an audio file to a conference participant
     * @param {Object} params Request parameters
     * @param {string} [params.accountSid] Account SID
     * @param {string} params.conferenceSid Conference SID
     * @param {string} params.participantSid Participant SID
     * @param {string} [params.audioUrl] A URL to the audio file that will be played to the participant.
     * @returns {Promise} Participant in question.
     */
    this.playAudioToParticipant = function (params) {
        params = params || {};
        let bodyParams = utils.prepareParams(params);
        delete bodyParams.conferenceSid;
        delete bodyParams.participantSid;
        return http.request(config, {
            method: 'POST',
            accountSid: params.accountSid,
            path: `/Conferences/${params.conferenceSid}/Participants/${params.participantSid}/Play.json`,
            bodyParams
        });
    };
}

module.exports = ConferencesConnector;