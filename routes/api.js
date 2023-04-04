'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get((req, res) => {
    const { input } = req.query;
    if (!convertHandler.getNum(input) && !convertHandler.getUnit(input)){
      res.json('invalid number and unit')
    }
    else if (!convertHandler.getNum(input)){
      res.json('invalid number')
    }
    else if (!convertHandler.getUnit(input)){
      res.json('invalid unit')
    }
    let initNum = convertHandler.getNum(input)
    let initUnit = convertHandler.getUnit(input)
    let retArray = {
      initNum: initNum,
      initUnit: initUnit,
      returnNum: convertHandler.convert(initNum, initUnit),
      returnUnit: convertHandler.getReturnUnit(initUnit),
      string: convertHandler.getString(initNum, initUnit, convertHandler.convert(initNum, initUnit), convertHandler.getReturnUnit(initUnit))
    }
    res.json(retArray)
  });
};
