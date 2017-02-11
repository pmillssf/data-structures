

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // set pair equal to an array of [k, v]
  var pair = [k, v];
   // set index to pair on storage
  this._storage.set(index, pair);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // set retrieved equal to .get(index);
  var retrieved = this._storage.get(index);
  // if retrieved[0] === k
  if (retrieved[0] === k) { 
    // return retrieved[1];
    return retrieved[1]; 
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};


