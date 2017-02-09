var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.len = 0;
  someInstance.storage = {};
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  'size': function() {
    return this.len;
  },
  'push': function(value) {
    this.storage[this.len] = value;
    this.len++;
  },
  'pop': function() {
    var popped = this.storage[this.len - 1];
    delete this.storage[this.len];
    if (this.len > 0) {
      this.len--;
    }
    return popped;
  }
};


