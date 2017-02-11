

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
// Update to handle collisions:
// check if index is undefined
//     if so set(index) = [];
// set var retrieved = .retrieve(index)
// set var keyexists = false
// iterate through retrieved
//   if retrieved[i][0] equals k
//     set retieved[i][1] to v 
//     set keyexists = true
// if !keyexisits 
//   push pair into retreved;
// set index to rerieved
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // set retrieved equal to .get(index);
  var retrieved = this._storage.get(index);
  if (retrieved !== undefined) {
    // if retrieved[0] === k
    if (retrieved[0] === k) { 
      // return retrieved[1];
      return retrieved[1]; 
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // set retrieved equal to .get(index);
  var retrieved = this._storage.get(index);
  if (retrieved !== undefined) {
    // if retrieved[0] === k
    if (retrieved[0] === k) {
      //.set(index);
      this._storage.set(index);      
    }
  }
};

