'use strict';

const process = require('process'),
      assert = require('assert'),
      location = require('../dno-location.js')();

// Run tests.
describe('DnoLocation', function() {
    describe('postcodeDistrictToDNOLocation()', function() {
        it('should return North Scotland when AB10 is given as a postcode district', function() {
            assert.equal('North Scotland', location.postcodeDistrictToDNOLocation("AB10"));
        });
        it('should return North Wales / Cheshire when LL18 is given as a postcode district', function() {
            assert.equal('North Wales / Cheshire', location.postcodeDistrictToDNOLocation("LL18"));
        });
        it('should return North Scotland when ZE3 is given as a postcode district', function() {
            assert.equal('North Scotland', location.postcodeDistrictToDNOLocation("ZE3"));
        });
        it('should return False Scotland when XYZ123 is given as a postcode district', function() {
            assert.equal(false, location.postcodeDistrictToDNOLocation("XYZ123"));
        });
    });
});



