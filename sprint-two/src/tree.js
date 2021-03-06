var Tree = function(value) {
  var newTree = {};

  _.extend(newTree, treeMethods);

  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var results = false;
  if (this.value === target) {
    results = true;
  }
  for (var i = 0; i < this.children.length; i++) {
    var childContains = this.children[i].contains(target);
    results = childContains || results;
  }
  return results;
};

treeMethods.returnTree = function() {
  var results = [];

  results.push(this.value);
  
  for (var i = 0; i < this.children.length; i++) {
    results.push(this.children[i].returnTree());
  }
  return results;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild - O(1);
 contains - 0(n);
 returnTree - o(n);
 */
