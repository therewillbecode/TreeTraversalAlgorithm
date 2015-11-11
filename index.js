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

var getRoute = function(startNode, targetNode){
    function getNodeEdges(a){
        var edgelist = [];
        visited.push(a.value);
        for (var prop in a.edges){
            edgelist.push(a.edges[prop]);
                if (a.edges[prop].value == targetNode.value) {
                    found = true;
            }
        }
        if(edgelist.length == 0){ return 'undefined'}
        return edgelist;
    }

    function traverseConnectedNodes(initialEdgeList) {
        for (var prop in initialEdgeList) {
            thisNode = initialEdgeList[prop].value;     // current node in edge list
            if(visited.indexOf(thisNode)>1){     //skip this node if already visited
                break;
            }
            neighbourEdgeList = getNodeEdges(initialEdgeList[prop]);      // gets edges for given neighbour
            if(typeof neighbourEdgeList[0] == 'object'){     // if neighbours exist for these neighbours then call recursively
                traverseConnectedNodes(neighbourEdgeList)
            }
        }
    }

    var found = false;
    var visited = [];    // stores value of visited nodes


    var edges = getNodeEdges(startNode);   
    traverseConnectedNodes(edges);  

    return found
};

//test 
console.log(getRoute(a,e));
