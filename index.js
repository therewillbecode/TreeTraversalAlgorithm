module.exports.getRoute = getRoute;
module.exports.node = Node;
module.exports = {
    getroute : getRoute,
    node : Node
};

//a constructor for adding a node to the tree
var Node = function(value, edges){
    nodes[value] = {
        value: value,
        edges: edges
    };
    return nodes[value];
};

//an object containing all the nodes in the tree
var nodes = {};

nodes['1'] = new Node(1, 2);
nodes['2'] = new Node(2, 3);
//a and b are of type Node
//find out if there is a route from a to b
var getRoute = function(a,b){




};

console.log(nodes);

