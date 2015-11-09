

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
    g = Node("g", []),
    h = Node("h", []),
    e = Node("e", [g]),
    d = Node("d", [f, g, h]),
    a = Node("a", [d]),
    b = Node("b", [d, e]),
    c = Node("c", [e, h]);

//a and b are of type Node
//find out if there is a route from a to b
var getRoute = function(a, xx){
// returns True if b is edge of a
// else returns list of edges
// if no edges returns false
    function getEdges(a){
        var edgelist = [];
// get edges for given Node
        console.log(a);
        for (var prop in a.edges){
            // theEdge = a.edges[prop].value;
            console.log('node is ' + a.edges[prop].value)
            edgelist.push(a.edges[prop]);
            if (a.edges[prop].value == xx.value){ asd = true}
        }

        return edgelist;
    }
    asd = false
    // set off recursion train for each edge of starting node
    edges =  getEdges(a);
    //console.log(edges);
    for (var prop in edges){
        getEdges(edges[prop])
        console.log(getEdges(edges[prop]))
    }

return asd
};


console.log(getRoute(c,g) + '4444');

//console.log(nodes);

