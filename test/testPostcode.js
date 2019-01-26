'use strict';

const process = require('process'),
      assert = require('assert'),
      postcode = require('../postcode.js')();

// Run tests.
describe('Postcode', function() {
    describe('parse()', function() {
        it('should return { "district": "B79" } when B79 8DL is given as a postcode', function() {
            assert.deepEqual({ district: "B79" }, postcode.parse("B79 8DL"));
        });
        it('should return { "district": "CV3" } when CV3 0NM is given as a postcode', function() {
            assert.deepEqual({ district: "CV3" }, postcode.parse("CV3 0NM"));
        });
        it('should return { "district": "B26" } when B262JK is given as a postcode', function() {
            assert.deepEqual({ district: "B26" }, postcode.parse("B262JK"));
        });
        it('should return false when an empty string is given as a postcode', function() {
            assert.equal(false, postcode.parse(""));
        });
        it('should return false when a number is given as a postcode', function() {
            assert.equal(false, postcode.parse("123456"));
        });
        it('should return false when an invalid value is given as a postcode', function() {
            assert.equal(false, postcode.parse("ZZ4Y70"));
        });
    });
});



