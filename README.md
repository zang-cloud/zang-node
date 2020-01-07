zang-node
==========

This Node.js library is an open source tool built to simplify interaction with the [Avaya CPaaS](http://www.zang.io) telephony platform. Avaya CPaaS makes adding voice and SMS to applications fun and easy.

For more information about Avaya CPaaS, please visit: [Avaya OneCloud™️ CPaaS ](https://www.zang.io/products/cloud)

To read the official documentation visit [Avaya CPaaS Docs](http://docs.zang.io/aspx/docs)

---


Installation
============

```
$ npm install zang-node
```

Usage
======

### REST

See the [Avaya CPaaS REST API documentation](http://docs.zang.io/aspx/rest) for more information.

#### Send SMS Example

```javascript
var zang = require('zang-node');
var enums = zang.enums;

var connector = new zang.SmsConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});

//send sms message
connector.sendSmsMessage({
    to: '+123456',
    from: '+654321',
    body: 'Hello from Avaya CPaaS!',
    statusCallback: 'http://mycallback.url.com',
    statusCallbackMethod: enums.HttpMethod.GET,
    allowMultiple: true
}).then(function (data) {
    console.log(data);
});

```
#### Configuration

First a configuration must be defined by specifying your Avaya CPaaS credentials. This configuration is passed to `zang.Connectors` from which you can then access all of the specific connectors:

```javascript
var zang = require('zang-node');
var connectors = new zang.Connectors({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});
var smsConnector = connectors.sms;
var conferencesConnector = connectors.conferences;
```

Alternatively you can instantiate a single connector directly like this:
```javascript
var zang = require('zang-node');
var callsConnector = new zang.CallsConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});
``` 

All of the REST API requests are implemented as promises:
```javascript
callsConnector.makeCall({
    /* makeCall parameters */
}).then(function(result) { 
    /* do something with result */
}).catch(function(err){
    /* handle errors */
});
```

#### Request parameters
Request parameters are passed as parameters to connector object methods as shown previously. All of the connector methods have an optional parameter called `accountSid` which you can specify per request. If not specified, the `accountSid` defined in the configuration is used automatically.
```javascript
var zang = require('zang-node');
var usagesConnector = new zang.UsagesConnector({
    accountSid: '{AccountSid}',
    authToken: '{AuthToken}'
});
//explicit accountSid
var usage = usagesConnector.viewUsage({
    accountSid: '{ExplicitAccountSid}',
    usageSid: '{UsageSid}'
});

//accountSid from configuration used automatically
var usage = usagesConnector.viewUsage({
    usageSid: '{UsageSid}'
});
```

#### Response data
Visit the [Avaya CPaaS Docs](http://docs.zang.io) page for more information about the returned data.

### InboundXML

InboundXML is an XML dialect which enables you to control phone call flow. For more information please visit the [Avaya CPaaS InboundXML documentation](http://docs.zang.io/aspx/inboundxml).

This library helps you generate InboundXML with a set of functions located under `zang.inboundXml`. Valid InboundXML documents have only one \<Response\> element at the root level and the rest of the instructions are contained inside.

InboundXML is generated by calling `zang.inboundXml.build()`, which returns a promise, on an XML definition object creating by using the other methods. The generated XML is automatically checked against a schema. The schema checking will be done only if the `libxml-xsd` library is present (included as an optional dependency). 

##### \<Say\> Example

```javascript
var zang = require('zang-node');
var ix = zang.inboundXml;
var enums = zang.enums;

var xmlDefinition = ix.response({content: [
    ix.say({
        language: enums.Language.EN,
        loop: 3,
        text: 'Welcome to Avaya CPaaS!',
        voice: enums.Voice.FEMALE
    })
]});

ix.build(xmlDefinition).then(function(xml){
    console.log(xml);
}).catch(function(err){
    console.log('The generated XML is not valid!', err);
});

```

will render

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Response>
    <Say loop="3" voice="female" language="en">Welcome to Avaya CPaaS!</Say>
</Response>
```

