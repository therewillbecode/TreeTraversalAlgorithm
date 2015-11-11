

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


//a and b ar
//find out if there is a route from a to b
var getRoute = function(a, xx){



    //console.log(nodes);
    //get edges
    function getEdges(a){
        visited.push(a.value);
        var edgelist = [];

        for (var prop in a.edges){
            edgelist.push(a.edges[prop]);

          //  try {
                if (a.edges[prop].value == xx.value) {
                    found = true;
         //       }
            }
          //  catch(e){console.log(e)}
        }
        if(edgelist.length == 0){ return 'undefined'}
        return edgelist;
    }
    var visited = [];    // stores value of visited nodes
    found = false;
