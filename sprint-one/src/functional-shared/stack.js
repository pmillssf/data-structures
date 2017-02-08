var Stack = function() {
  var someInstance = {'length': 0};
  $.extend(someInstance, stackMethods);
  console.log(someInstance);
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  'size': function() {
    return this.length;
  },
  'push': function() {
    this.length++;
  }
};


