var cpaas = require('@avaya/cpaas');
var ix = cpaas.inboundXml;
var enums = cpaas.enums;

var xmlDefinition = ix.response({content: [
    ix.say({
        language: enums.Language.EN,
        loop: 3,
        text: 'Welcome to CPaaS!',
        voice: enums.Voice.FEMALE
    })
]});

ix.build(xmlDefinition).then(function(xml){
    console.log(xml);
}).catch(function(err){
    console.log('The generated XML is not valid!', err);
});
