var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // Check if the Set contains the item
  if (!this.contains(item)) {
    // if not this._storage.push(item)
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  // return _.contains(this._storage, item);
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item) {
  // set removeIndex equal to indexOf this._storage, item
  var removeIndex = _.indexOf(this._storage, item);
  // if removeIndex > 0
  if (removeIndex >= 0) {
    // remove the item
    this._storage.splice(removeIndex, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
