var index = require("../index");
var chai = require('chai');
var expect = require('chai').expect;



describe('should convert sum binary and output decimal', function () {
    it('"0","0" should give 0', function () {
        expect(index.calculate("0","0")).to.equal(0);
    });

    it('"1","1" should give 2', function () {
        expect(index.calculate("1","1")).to.equal(2);
    });

    it('"10","10" should give 4', function () {
        expect(index.calculate("10","10")).to.equal(4);
    });

    it('"101","100" should give 9', function () {
        expect(index.calculate("101","100")).to.equal(9);
    });

    it('"1010101","1010101" should give 142', function () {
        expect(index.calculate("1010101","1010101")).to.equal(170);
    });
});

describe('should convert binary to decimal', function () {
    it('should convert binary to decimal', function () {
        expect(index.conv("0")).to.equal(0);
    });

    it('should convert binary to decimal', function () {
        expect(index.conv("1")).to.equal(1);
    });

    it('100 should equal 4', function () {
        expect(index.conv("100")).to.equal(4);
    });

    it('11111 should equal 19', function () {
        expect(index.conv("1111111")).to.equal(127);
    });

    it('01010101001110011100000 should equal 2792672', function () {
        expect(index.conv("01010101001110011100000")).to.equal(2792672);
    });
});