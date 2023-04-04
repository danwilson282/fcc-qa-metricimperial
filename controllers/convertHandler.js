function ConvertHandler() {
  
  this.getNum = function(input) {
    //find number from input
    let result
    let inputNum = input.match(/[.\d/]+/g) || ["1"];
    let checkFraction = inputNum[0].split("/");
    //check if valid fraction
    if (checkFraction.length>2){
      return false;
    }
    else if (checkFraction.length==2){
      result = checkFraction[0]/checkFraction[1];
    }
    else{
      result = checkFraction[0]
    }
    if (isNaN(result)){
      return false;
    }
    else{
      return parseFloat(result);
    }
    
  };
  
  this.getUnit = function(input) {
    let result;
    let unit = input.match(/[a-zA-Z]+/g)[0]
    switch (unit.toLowerCase()){
      case "km":
        result = "km";
        break;
      case "mi":
        result = 'mi';
        break;
      case "lbs":
        result = 'lbs';
        break;
      case "kg":
        result = 'kg';
        break;
      case "l":
        result = 'L';
        break;
      case "gal":
        result = 'gal';
        break;
      default:
        return false;
    }    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch (initUnit.toLowerCase()){
      case "km":
        result = "mi";
        break;
      case "mi":
        result = 'km';
        break;
      case "lbs":
        result = 'kg';
        break;
      case "kg":
        result = 'lbs';
        break;
      case "l":
        result = 'gal';
        break;
      case "gal":
        result = 'L';
        break;
      default:
        return false;
    }    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch (unit.toLowerCase()){
      case "km":
        result = "kilometers";
        break;
      case "mi":
        result = 'miles';
        break;
      case "lbs":
        result = 'pounds';
        break;
      case "kg":
        result = 'kilograms';
        break;
      case "l":
        result = 'liters';
        break;
      case "gal":
        result = 'gallons';
        break;
      default:
        return false;
    } 
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit.toLowerCase()){
      case "km":
        result = initNum/miToKm;
        break;
      case "mi":
        result = initNum*miToKm;
        break;
      case "lbs":
        result = initNum*lbsToKg;
        break;
      case "kg":
        result = initNum/lbsToKg;
        break;
      case "l":
        result = initNum/galToL;
        break;
      case "gal":
        result = initNum*galToL;
        break;
      default:
        return false;
    } 
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = initNum+' '+this.spellOutUnit(initUnit)+' converts to '+this.convert(initNum, initUnit)+ ' '+this.spellOutUnit(returnUnit)
    
    return result;
  };
  
}

module.exports = ConvertHandler;
