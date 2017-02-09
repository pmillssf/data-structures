var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.len = 0;
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  'size': function() {
    return this.len;
  }, 
  'enqueue': function() {
    this.len++;
  },
  'dequeue': function() {
    if (this.len > 0) {
      this.len--;
    }
  }
};


