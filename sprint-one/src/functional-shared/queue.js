var Queue = function() {
  var someInstance = {'len': 0};
  $.extend(someInstance, queueMethods);
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


