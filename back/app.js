const express = require('express');
const request = require('request');
const xml2js = require('xml2js');
const _ = require('lodash');

const app = express();


app.get('/measurement', function(req, res){
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

      result = result.device[0];
      delete result['$'];

      const measurementsArray = result.measurements[0].measurement;

      const measurementsObject = {};

      measurementsArray.map((value) => {
        const item = value['$'];
        if(item.Value !== undefined) {
          measurementsObject[_.camelCase(item.Type.replace(/ /g, ''))] = {};
          measurementsObject[_.camelCase(item.Type.replace(/ /g, ''))]['value'] = parseFloat(item.Value);
          measurementsObject[_.camelCase(item.Type.replace(/ /g, ''))]['unit'] = item.Unit;
        }
      })
      result.measurements = measurementsObject;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end(JSON.stringify(result.measurements, null, 4))

    });
  });
});


app.get('/info', function(req, res){
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

      result = result.device[0];

      result.info = result['$'];
      delete result['$'];

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end(JSON.stringify(result.info, null, 4))

    });
  });
});


app.listen(3000);
