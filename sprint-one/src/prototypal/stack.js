var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.len = 0;
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  'size': function() {
    return this.len;
  },
  'push': function() {
    this.len++;
  },
  'pop': function() {
    this.len--;
  }
};


