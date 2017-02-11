

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // set pair equal to an array of [k, v]
  var pair = [k, v];
  // check if .get(index) is undefined
  if (this._storage.get(index) === undefined) {
    //if so set(index) = [];
    this._storage.set(index, []);
  }
  // set var retrieved = .get(index)
  var retrieved = this._storage.get(index);
  // set var keyexists = false
  var keyExists = false;
  // iterate through retrieved
  for (var i = 0; i < retrieved.length; i++) {
    //if retrieved[i][0] equals k
    if (retrieved[i][0] === k) {
      //set retieved[i][1] to v 
      retrieved[i][1] = v;
      //set keyexists = true
      keyExists = true;  
    }
  }
  // if !keyexisits 
  if (!keyExists) {
    //push pair into retreved;
    retrieved.push(pair);
  }
  // set index to rerieved
  this._storage.set(index, retrieved);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // set retrieved equal to .get(index);
  var retrieved = this._storage.get(index);
  if (retrieved !== undefined) {
    for (var i = 0; i < retrieved.length; i++) {
      if (retrieved[i][0] === k) { 
        // return retrieved[1];
        return retrieved[i][1]; 
      }
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

