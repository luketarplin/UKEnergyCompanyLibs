'use strict';

const assert = require('assert'),
    dnoLocationToGSPMapper = require('../dnoLocationToGSPMapper.js')();

// Run tests.
describe('DnoLocationToGSPMapper', function() {
    describe('DnoLocationToGSPMapper', function() {
        it('should return an object with _A as the value when the key of "East England" is given', () => {
            assert.equal("_A", dnoLocationToGSPMapper["East England"]);
        });

        it('should return an object with _B as the value when the key of "East Midlands" is given', () => {
            assert.equal("_B", dnoLocationToGSPMapper["East Midlands"]);
        });

        it('should return an object with _C as the value when the key of "London" is given', () => {
            assert.equal("_C", dnoLocationToGSPMapper["London"]);
        });

        it('should return an object with _F as the value when the key of "North East England" is given', () => {
            assert.equal("_F", dnoLocationToGSPMapper["North East England"]);
        });

        it('should return an object with _P as the value when the key of "North Scotland" is given', () => {
            assert.equal("_P", dnoLocationToGSPMapper["North Scotland"]);
        });

        it('should return an object with _D as the value when the key of "North Wales / Cheshire" is given', () => {
            assert.equal("_D", dnoLocationToGSPMapper["North Wales / Cheshire"]);
        });

        it('should return an object with _G as the value when the key of "North West England" is given', () => {
            assert.equal("_G", dnoLocationToGSPMapper["North West England"]);
        });

        it('should return an object with _J as the value when the key of "South East England" is given', () => {
            assert.equal("_J", dnoLocationToGSPMapper["South East England"]);
        });

        it('should return an object with _N as the value when the key of "South Scotland" is given', () => {
            assert.equal("_N", dnoLocationToGSPMapper["South Scotland"]);
        });

        it('should return an object with _K as the value when the key of "South Wales" is given', () => {
            assert.equal("_K", dnoLocationToGSPMapper["South Wales"]);
        });

        it('should return an object with _L as the value when the key of "South West England" is given', () => {
            assert.equal("_L", dnoLocationToGSPMapper["South West England"]);
        });

        it('should return an object with _H as the value when the key of "Southern England" is given', () => {
            assert.equal("_H", dnoLocationToGSPMapper["Southern England"]);
        });

        it('should return an object with _E as the value when the key of "West Midlands" is given', () => {
            assert.equal("_E", dnoLocationToGSPMapper["West Midlands"]);
        });

        it('should return an object with _M as the value when the key of "Yorkshire" is given', () => {
            assert.equal("_M", dnoLocationToGSPMapper["Yorkshire"]);
        });

        it('should return undefined when a not found key is given', () => {
            assert.equal(undefined, dnoLocationToGSPMapper["<DNO Locaation not found>"]);
        });
    });
});



