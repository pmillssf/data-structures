

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new GraphNode(node);
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // use _.map to iterate through the this.nodes property, returning an array of the nodes values
  var nodeValues = _.map(this.nodes, function(node) {
    return node.value;
  });
  // use _.containts on the above map to check if the node exists
  return _.contains(nodeValues, node);

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // use _.map to return an array of values
  var nodeValues = _.map(this.nodes, function(node) {
    return node.value;
  });
  // use _indexOf to find the index of the node value
  var indexToDelete = _.indexOf(nodeValues, node);
  // use this.nodes.splice() to remove the returned indexOf
  this.nodes.splice(indexToDelete, 1);

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // use _.map to find the node values
  // use _.indexOf to find the index of fromNode (fromNodeIndex)
  // use _.indexOf to find the index of toNode (toNodeIndex)
  // push the value of toNode into the edges of FromNode
  // push the value of fromNode into the edges of to Node
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

// Create a node class
var GraphNode = function(value) {
  // each node has a value property set to its value
  this.value = value;
 // each node has an edges property that contains an array of edges;
  this.edges = [];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


