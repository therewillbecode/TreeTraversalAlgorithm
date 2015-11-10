

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

var
    f = Node("f", []),
    g = Node("g", [b]),
    h = Node("h", []),
    e = Node("e", [g]),
    d = Node("d", [f, g, h]),
    a = Node("a", [d]),
    b = Node("b", [d, e]),
    c = Node("c", [e, h]);
//a and b ar
//find out if there is a route from a to b
var getRoute = function(a, xx){
    //get edges
    function getEdges(a){
        var edgelist = [];
        console.log(a);
        for (var prop in a.edges){
            console.log('node is ' + a.edges[prop].value)
            edgelist.push(a.edges[prop]);
            if (a.edges[prop].value == xx.value){ asd = true}
        }
        return edgelist;
    }

    asd = false;

        edges =  getEdges(a)    // get edges for first node

    for (var prop in edges){
        getEdges(edges[prop])      // gets edges for each neighbour
        console.log(getEdges(edges[prop]))
    }

return asd
};


console.log(getRoute(c,b) + '4444');


