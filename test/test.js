var index = require("../index");
var chai = require('chai');
var expect = require('chai').expect;

console.log(index.getroute)
console.log(index.node)


describe('Works for 2 vertices in tree ', function () {
    var nodes_2_vertices = {};
    nodes_2_vertices['1'] = new index.node(1, 2);
    nodes_2_vertices['2'] = new index.node(2, 3);
    it('should return true for is Node:1 connected to Node:2', function () {
        expect(index.getRoute(1, 2)).to.equal(true);
    });

    it('should return false for is Node:2 connected to Node:1', function () {
        expect(index.getRoute(2, 3)).to.equal(false);
    });b

    it('should return false for is Node:1 connected to Node:3 as 3 doesn\'t exist', function () {
        expect(index.getRoute(2, 3)).to.equal(false);
    });
});

describe('zip object', function () {
    it('item count should be', function () {
        expect(index.get([['fred', 30], ['barney', 40]])).to.equal({ 'fred': 30, 'barney': 40 });
    });
});

