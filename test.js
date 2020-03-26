//var request=require('request-promise');
var got=require('got');
var result=require('./index.js');
const endpoint='https://sy-text-analytics-acs.cognitiveservices.azure.com/text/analytics/v3.0-preview.1/Languages';
const sub_key='2c76e5fb4daf4b8da0df6368186914b2';
//var textanalytics={};
let get_language=function(documents){
    var options={
      method: 'post',
      //uri: endpoint,
      body: JSON.stringify(documents),
      headers: {
            'Ocp-Apim-Subscription-Key': sub_key,
            //'Content-type':'application/json'
        },
    //json: true
};
    got(endpoint,options)
        .then(function(response){
          return JSON.parse(response.body);
        })
        .catch(function(error){
          console.log(error);
        });
}
//console.log(new_res);

//console.log(new_res);
//console.log(textanalytics);
//new_res[0]();
//}

let documents={
  documents:[
    {'id':'1','text':'hi how wre you'},
    {'id':'2','text':'Este es un document escrito en Español.'}
  ]
};
let res=get_language(documents);
console.log(res);
//console.log();
