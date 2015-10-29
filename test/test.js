var index = require("../index");
var chai = require('chai');
var expect = require('chai').expect;

describe('a basic test', function () {
    it('should pass when everything is okay', function () {
        expect(index.add()).to.equal('333');
    });
});

describe('convert binary', function () {
    it('should convert binary to hexadecimal', function () {
        expect(index.conv("0")).to.equal(0);

    });
});

describe('convert binary', function () {
    it('should convert binary to hexadecimal', function () {
        expect(index.conv("1")).to.equal(1);
    });

    it('100 should equal 4', function () {
        expect(index.conv("100")).to.equal(4);
    });

    it('1001 should equal 9', function () {
        expect(index.conv("1001")).to.equal(9);
    });

    it('10011 should equal 19', function () {
        expect(index.conv("10011")).to.equal(19);
    });

    it('11111 should equal 19', function () {
        expect(index.conv("1111111")).to.equal(35);
    });

});