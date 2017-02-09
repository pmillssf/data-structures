var Queue = function() {
  this.len = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function() {
  return this.len;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.len] = value;
  this.len++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[0];
  for (var i = 0; i < this.len; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[this.len];
  if (this.len > 0) {
    this.len--;
  }
  return dequeued;
};


