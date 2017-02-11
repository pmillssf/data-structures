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
BinarySearchTree.prototype.insert = function(treeOrValue) {
  // set var instantiating = false;
  var instantiating = false;
  // if typeof treeOrValue === number
  if (typeof treeOrValue === 'number') {
    // var newBinarySearchTree = BinarySearchTree(treeOrValue);
    var newBinarySearchTree = BinarySearchTree(treeOrValue);
    // instantiating = true
    instantiating = true; 
  }
  // if (instiating) 
  if (instantiating) {
    //  this.insert(newBinarySearchTree)
    this.insert(newBinarySearchTree);  
  }
  // if (this.value > treeOrValue.value)
  if (this.value > treeOrValue.value) {
    // if this.left === undefined
    if (this.left === undefined) {
      // this.left = treeOrValue
      this.left = treeOrValue;
    // else 
    } else {
      // this.left.insert(treeOrValue);
      this.left.insert(treeOrValue);
    }
  // else if (this.value < treeOrValue.value)
  } else if (this.value < treeOrValue.value) {
    // if this.right === undefined
    if (this.right === undefined) {
      // this.right = treeOrValue
      this.right = treeOrValue;
    // else 
    } else {
      //this.right.inset(treeOrValue)
      this.right.insert(treeOrValue);
    }
  }
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
