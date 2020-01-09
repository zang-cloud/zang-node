'use strict';

/**
 * @module zang-node/enums/product
 */

 // Init
const Product_pre = {
    "OUTBOUND_CALL": 1,
    "INBOUND_CALL": 2,
    "OUTBOUND_SMS": 3,
    "INBOUND_SMS": 4,
    "OUTBOUND_SIP": 5,
    "INBOUND_SIP": 6,
    "RECORDING": 7,
    "RECURRING_DID": 8,
    "RECURRING_DID_PREMIUM": 9,
    "TRANSCRIPTION_AUTO": 12,
    "UNKNOWN_13": 13,
    "TRANSCRIPTION_HYBRID": 14,
    "UNKNOWN_15": 15,
    "RECURRING_INBOUND_CHANNEL": 17,
    "INBOUND_CALL_CHANNEL": 18,
    "CNAM_DIP": 19,
    "CARRIER_LOOKUP": 20,
    "OUTBOUND_CALL_SPOOFED": 21,
    "INBOUND_CALL_CHANNEL_OVERAGE": 22,
    "RECURRING_DID_UNBLOCK": 23,
    "INBOUND_CALL_UNBLOCKED": 24,
    "INBOUND_CALL_FORWARDED_FROM": 25,
    "UNKNOWN_26": 26,
    "INBOUND_CLIENT": 28,
    "OUTBOUND_CLIENT": 29,
    "UNKNOWN_34": 34,
    "UNKNOWN_36": 36,
    "UNKNOWN_39": 39,
    "UNKNOWN_40": 40,
};

let Product_pre_reverse = {
};

for (var name in Product_pre) { 
    Product_pre_reverse[Product_pre[name]] = name;
}

/**
 * @readonly
 * @enum {string} Product
 */
const Product = {
    OUTBOUND_CALL: '1',
    INBOUND_CALL: '2',
    OUTBOUND_SMS: '3',
    INBOUND_SMS: '4',
    OUTBOUND_SIP: '5',
    INBOUND_SIP: '6',
    RECORDING: '7',
    RECURRING_DID: '8',
    RECURRING_DID_PREMIUM: '9',
    TRANSCRIPTION_AUTO: '12',
    TRANSCRIPTION_HYBRID: '14',
    RECURRING_INBOUND_CHANNEL: '17',
    INBOUND_CALL_CHANNEL: '18',
    CNAM_DIP: '19',
    CARRIER_LOOKUP: '20',
    OUTBOUND_CALL_SPOOFED: '21',
    INBOUND_CALL_CHANNEL_OVERAGE: '22',
    RECURRING_DID_UNBLOCK: '23',
    INBOUND_CALL_UNBLOCKED: '24',
    INBOUND_CALL_FORWARDED_FROM: '25'
};

const reverseMap = {
    "Outbound Call": Product.OUTBOUND_CALL,
    "Inbound Call": Product.INBOUND_CALL,
    "Outbound SMS": Product.OUTBOUND_SMS,
    "Inbound SMS": Product.INBOUND_SMS,
    "Outbound SIP": Product.OUTBOUND_SIP,
    "Inbound SIP": Product.INBOUND_SIP,
    "Recording": Product.RECORDING,
    "Recurring DID": Product.RECURRING_DID,
    "Recurring DID (Premium)": Product.RECURRING_DID_PREMIUM,
    "Transcription (Auto)": Product.TRANSCRIPTION_AUTO,
    "Transcription (Hybrid)": Product.TRANSCRIPTION_HYBRID,
    "Recurring Inbound Channel": Product.RECURRING_INBOUND_CHANNEL,
    "Inbound Call (Channel)": Product.INBOUND_CALL_CHANNEL,
    "CNAM Dip": Product.CNAM_DIP,
    "Carrier Lookup": Product.CARRIER_LOOKUP,
    "Outbound Call (Spoofed)": Product.OUTBOUND_CALL_SPOOFED,
    "Inbound Call (Channel Overage)": Product.INBOUND_CALL_CHANNEL_OVERAGE,
    "Recurring DID Unblock": Product.RECURRING_DID_UNBLOCK,
    "Inbound Call Unblocked": Product.INBOUND_CALL_UNBLOCKED,
    "Inbound Call Forwarded From": Product.INBOUND_CALL_FORWARDED_FROM
};

Product.forValue = function(value) {
    return reverseMap[value];
};

Product.getProductSignature = function(num) {
    return Product_pre_reverse[Number(num)] || ('?'+num);
};

Product.getRawDictionary = function() {
    return Product_pre;
}

module.exports = Product;