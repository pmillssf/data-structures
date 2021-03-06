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
  // if (this.value === value)
  if (this.value === value) {
    // return true
    return true;
  // else if (this.value > value && this.left !== undefined)
  } else if (this.value > value && this.left !== undefined) {
    // return this.left.contains(value);
    return this.left.contains(value);   
  // else if (this.value < value && this.right !== undefined)
  } else if (this.value < value && this.right !== undefined) {
    // return this.right.contains(value)
    return this.right.contains(value);
  // else 
  } else {
    // return false
    return false;
  }
};
// define BinarySearchTree.prototype.depthFirstLog function
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  // if this.left !== undefined 
  if (this.left !== undefined) {
    // this.left.depthFirstLog(cb)
    this.left.depthFirstLog(cb);
  }
  // if this.right !== undeined
  if (this.right !== undefined) {
    // this.right.depthFirstLog(cb)
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert = O(log n);
 contains = O(log n);
 depthFIrstLog = O(n);
 */
