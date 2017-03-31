'use strict';

/**
 * @readonly
 * @enum PRODUCT
 */
const values = {
    OUTBOUND_CALL: 1,
    INBOUND_CALL: 2,
    OUTBOUND_SMS: 3,
    INBOUND_SMS: 4,
    OUTBOUND_SIP: 5,
    INBOUND_SIP: 6,
    RECORDING: 7,
    RECURRING_DID: 8,
    RECURRING_DID_PREMIUM: 9,
    TRANSCRIPTION_AUTO: 12,
    TRANSCRIPTION_HYBRID: 14,
    RECURRING_INBOUND_CHANNEL: 17,
    INBOUND_CALL_CHANNEL: 18,
    CNAM_DIP: 19,
    CARRIER_LOOKUP: 20,
    OUTBOUND_CALL_SPOOFED: 21,
    INBOUND_CALL_CHANNEL_OVERAGE: 22,
    RECURRING_DID_UNBLOCK: 23,
    INBOUND_CALL_UNBLOCKED: 24,
    INBOUND_CALL_FORWARDED_FROM: 25
};

const reverseMap = {
    "Outbound Call": values.OUTBOUND_CALL,
    "Inbound Call": values.INBOUND_CALL,
    "Outbound SMS": values.OUTBOUND_SMS,
    "Inbound SMS": values.INBOUND_SMS,
    "Outbound SIP": values.OUTBOUND_SIP,
    "Inbound SIP": values.INBOUND_SIP,
    "Recording": values.RECORDING,
    "Recurring DID": values.RECURRING_DID,
    "Recurring DID (Premium)": values.RECURRING_DID_PREMIUM,
    "Transcription (Auto)": values.TRANSCRIPTION_AUTO,
    "Transcription (Hybrid)": values.TRANSCRIPTION_HYBRID,
    "Recurring Inbound Channel": values.RECURRING_INBOUND_CHANNEL,
    "Inbound Call (Channel)": values.INBOUND_CALL_CHANNEL,
    "CNAM Dip": values.CNAM_DIP,
    "Carrier Lookup": values.CARRIER_LOOKUP,
    "Outbound Call (Spoofed)": values.OUTBOUND_CALL_SPOOFED,
    "Inbound Call (Channel Overage)": values.INBOUND_CALL_CHANNEL_OVERAGE,
    "Recurring DID Unblock": values.RECURRING_DID_UNBLOCK,
    "Inbound Call Unblocked": values.INBOUND_CALL_UNBLOCKED,
    "Inbound Call Forwarded From": values.INBOUND_CALL_FORWARDED_FROM
};

values.forValue = function(value) {
    return reverseMap[value];
};

module.exports = values;