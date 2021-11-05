const express = require('express');
const request = require('request');
const xml2js = require('xml2js');

const app = express();



app.get('/', function(req, res){
  const options = {
    normalizeTags: true,
    explicitRoot: false,
    headless: true
  };
  request.get(`http://${req.query.inverterAddress}/measurements.xml`, options, function(err, res1, body) {
    xml2js.parseString(body, options, (err, result) => {
      if(err) {
        throw err;
      }

      result.device[0].info = result.device[0]['$'];
      delete result.device[0]['$'];

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end(JSON.stringify(result.device[0], null, 4))

    });
  });
});

app.listen(3000);
