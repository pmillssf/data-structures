

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // set var pair equal to an array of k & v
  var pair = [k, v];
  // check if this.storage[index] is undefined
  if (this._storage[index] === undefined) {
    // if yes, set to an empty array
    this._storage[index] = [];
  }
  // if retrieve(k) is undefined
  if (this.retrieve(k) === undefined) {
    // push pair into this.storage[index];
    this._storage[index].push(pair);
  } else {
    // iterate through this._storage[index]
    for (var i = 0; i < this._storage[index].length; i++) {
      // if match to key
      if (this._storage[index][i][0] === k) {
        // set value to equal v;
        this._storage[index][i][1] = v;
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // iterate over this._storage[index]
  if (this._storage[index] === undefined) {
    return undefined;
  }
  for (var i = 0; i < this._storage[index].length; i++) {
    // find the array with index 0 that matches k
    if (this._storage[index][i][0] === k) {
    // return the value at index 1 for the matching array
      return this._storage[index][i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // iterate over this._storage[index]
    // if this._storage[index][i][0] equals k
      //splice this._storage[index][i]
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


/* 

*/