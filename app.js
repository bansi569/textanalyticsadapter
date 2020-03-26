var request=require('request-promise');
var got=require('got')
var result=require('./index.js');
const endpoint='https://sy-text-analytics-acs.cognitiveservices.azure.com/text/analytics/v3.0-preview.1/';
const sub_key='2c76e5fb4daf4b8da0df6368186914b2';
var textanalytics={};
//let get_language=function(documents){
  //let body=JSON.stringify(documents);
  result.forEach(generatefunctions);
  function generatefunctions(uri){
      var str=uri.split('/').join('');
     textanalytics[str]= function(documents){
    var options={
      method: 'post',
      uri: endpoint+uri,
      body: documents,
      headers: {
            'Ocp-Apim-Subscription-Key': sub_key,
            'Content-type':'application/json'
        },
    json: true
};
    request(options)
        .then(function(response){
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        });
}
//console.log(new_res);
}
//console.log(new_res);
console.log(textanalytics);
//new_res[0]();
//}

/*let documents={
  'documents':[
    {'id':'1','text':'hi how wre you'},
    {'id':'2','text':'Este es un document escrito en Español.'}
  ]
};*/
//get_language(documents);
//onsole.log(get_language(documents));
