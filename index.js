
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
    j = Node("j", [c]);
    w = Node("w", [j, g])
    p = Node("p", [w])

//a and b ar
//find out if there is a route from a to b
var getRoute = function(a, xx){
    //get edges
    function getEdges(a){
        var edgelist = [];
        //console.log(a)

        for (var prop in a.edges){
            edgelist.push(a.edges[prop])

            try {
                if (a.edges[prop].value == xx.value) {
                    found = true
                }
            }
            catch(e){console.log(e)}
        }
        if(edgelist.length == 0){ return 'undefined'}
        return edgelist;
    }

    found = false;

    edges = getEdges(a);    // get edges for first node

    neighbourCalls(edges);

    function neighbourCalls(edgelist) {
        console.log(edgelist);
        for (var prop in edgelist) {
            edgeSet = getEdges(edgelist[prop]);      // gets edges for given neighbour

            if(typeof edgeSet[0] == 'object'){     // if neighbours exist for these neighbours then call recursively
                neighbourCalls(edgeSet)
            }
        }
    }
    return found
};


console.log(getRoute(p ,h) + '4444');
