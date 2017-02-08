var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[size - 1];
    delete storage[size];
    if (size > 0) {
      size--;
    }
    return dequeued;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
