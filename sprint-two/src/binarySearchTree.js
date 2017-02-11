var BinarySearchTree = function(value) {
  // set var tree = Object.create(BinarySearchTree.prototype)
  var tree = Object.create(BinarySearchTree.prototype);
  // set tree.value equal to value
  tree.value = value;
  // set tree.left
  tree.left;
  // set tree.right
  tree.right;
  // return tree
  return tree;
};

// define BinarySearchTree.prototype.insert function
BinarySearchTree.prototype.insert = function(value) {
  // set var newBinarySearchTree = BinarySearchTree(value);
  var newBinarySearchTree = BinarySearchTree(value);
  // if this.value > newBinarySearchTree.value
  if (this.value > newBinarySearchTree.value) {
    // set this.left to newBinarySearchTree
    this.left = newBinarySearchTree;
  // else if this.value < newBinarySearchTree
  } else if (this.value < newBinarySearchTree.value) {
    // set this.right to newBinarySearchTree
    this.right = newBinarySearchTree;
  }
  // reset parameter to treeOrValue
  // set var instantiating = false;
  // if typeof treeOrValue === number
    // var newBinarySearchTree = BinarySearchTree(treeOrValue);
    // instantiating = true
  // if (instiating) 
    //  this.insert(newBinarySearchTree)
  // if (this.value > treeOrValue.value)
    // if this.left === undefined
      // this.left = treeOrValue
    // else 
      // this.left.insert(treeOrValue);
  // if (this.value < treeOrValue.value)
    // if this.right === undefined
      // this.right = treeOrValue
    // else 
      //this.right.inset(treeOrValue) 

};
// define BinarySearchTree.prototype.contains function
BinarySearchTree.prototype.contains = function(value) {

};
// define BinarySearchTree.prototype.depthFirstLog function
BinarySearchTree.prototype.depthFirstLog = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
