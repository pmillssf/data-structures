var Queue = function() {
  var someInstance = {'len': 0, 'storage': {}};
  $.extend(someInstance, queueMethods);
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  'size': function() {
    return this.len;
  },
  'enqueue': function(value) {
    this.storage[this.len] = value;
    this.len++;
  },
  'dequeue': function() {
    var dequeued = this.storage[0];
    for (var i = 0; i < this.len; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.len];
    if (this.len > 0) {
      this.len--;
    }
    return dequeued;
  }
};


