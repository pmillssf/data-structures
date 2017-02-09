var Queue = function() {
  this.len = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function() {
  return this.len;
};

Queue.prototype.enqueue = function() {
  this.len++;
};


