const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('Whole Number', function(done){
        let input = '5kg';
        assert.equal(convertHandler.getNum(input),5);
        done();
    });
    test('Decimal Number', function(done){
        let input = '5.2kg';
        assert.equal(convertHandler.getNum(input),5.2);
        done();
    });
    test('Fractional Number', function(done){
        let input = '5/2kg';
        assert.equal(convertHandler.getNum(input),2.5);
        done();
    });
    test('Fractional input with decimal', function(done){
        let input = '5/0.5kg';
        assert.equal(convertHandler.getNum(input),10);
        done();
    });
    test('Invalid Fraction', function(done){
        let input = '5/3/1kg';
        assert.equal(convertHandler.getNum(input),false);
        done();
    });
    test('Default to 1 with no numerical input', function(done){
        let input = 'kg';
        assert.equal(convertHandler.getNum(input),1);
        done();
    });
    test('Check all input units work', function(done){
        let input = ['kg', 'Lbs', 'Km', 'mI', 'l', 'gaL'];
        let output = ['kg', 'lbs', 'km', 'mi', 'L', 'gal'];
        input.forEach(function (e,i) {
            assert.equal(convertHandler.getUnit(e),output[i]);
        })
        done();
    });
    test('Unknown unit', function(done){
        let input = 'kilowamps';
        assert.equal(convertHandler.getUnit(input),false);
        done();
    });
    test('Check all input units give correct output', function(done){
        let input = ['kg', 'Lbs', 'Km', 'mI', 'l', 'gaL'];
        let output = ['lbs', 'kg', 'mi', 'km', 'gal', 'L'];
        input.forEach(function (e,i) {
            assert.equal(convertHandler.getReturnUnit(e),output[i]);
        })
        done();
    });
    test('Check full length name', function(done){
        let input = ['kg', 'Lbs', 'Km', 'mI', 'l', 'gaL'];
        let output = ['kilograms', 'pounds', 'kilometers', 'miles', 'liters', 'gallons'];
        input.forEach(function (e,i) {
            assert.equal(convertHandler.spellOutUnit(e),output[i]);
        })
        done();
    });
    test('gal to L', function(done){
        assert.equal(convertHandler.convert(5,'gal'),18.92705);
        done();
    });
    test('L to gal', function(done){
        assert.equal(convertHandler.convert(5,'l'),1.32086);
        done();
    });
    test('mi to km', function(done){
        assert.equal(convertHandler.convert(5,'mi'),8.04670);
        done();
    });
    test('km to mi', function(done){
        assert.equal(convertHandler.convert(5,'km'),3.10686);
        done();
    });
    test('kg to lbs', function(done){
        assert.equal(convertHandler.convert(5,'kg'),11.02312);
        done();
    });
    test('lbs to kg', function(done){
        assert.equal(convertHandler.convert(5,'lbs'),2.26796);
        done();
    });
});