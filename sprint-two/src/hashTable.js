

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //Add tuple count to HashTable, set to 0
  this.tupleCount = 0;
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
    //Update .insert to increment tuple count when a pair is pushed
    this.tupleCount++;
  }
  // set index to rerieved
  this._storage.set(index, retrieved);
  //if tupleCount > Math.floor(this._limit * .75)
  if (this.tupleCount > Math.floor(this._limit * .75)) {
    // this.double();
    this.double();
  }
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
    // iterate over retrieved
    for (var i = 0; i < retrieved.length; i++) {
      // if retrieved[i][0] === k
      if (retrieved[i][0] === k) {
        // retrieved.splice(i, 1)
        retrieved.splice(i, 1);
        // set(index) to retieved
        this._storage.set(index, retrieved);
      } 
    }
  }
};

// define HashTable.prototype.tuples - 
HashTable.prototype.tuples = function() {
  var tuples = [];
  // Use this._storage.each() to push each tuple into tuples
  this._storage.each(function(storage) {
    if (storage !== undefined) {
      for (var i = 0; i < storage.length; i++) {
        tuples.push(storage[i]);
      }
    }
  });
  // return tuples
  return tuples;
};

//   define HashTable.prototype.double
HashTable.prototype.double = function() {
  // calls HashTable.prototype.tuples and saves the result as var tuples
  var tuples = this.tuples();
  var tuplesCountHolder = this.tupleCount;
  // sets this._limit to this._limit * 2;
  this._limit = this._limit * 2;
  // set this._storage to LimitedArray(this._limit)
  this._storage = LimitedArray(this._limit);
  // iterates over tuples
  for (var i = 0; i < tuples.length; i++) {
    // calls this.insert on each tuple 
    this.insert(tuples[i][0], tuples[i][1]);
  }
  this.tupleCount = tuplesCountHolder;
};
