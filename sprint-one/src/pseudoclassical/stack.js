var Stack = function() {
  this.len = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype = {
  'size': function() {
    return this.len;
  },
  'push': function() {
    this.len++;
  },
  'pop': function() {
  }
};