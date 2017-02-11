var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null && list.tail === null) {
      var initialNode = Node(value);
      list.head = initialNode;
      list.tail = initialNode;
    } else {
      var newNode = Node(value);
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var removedHead = list.head.value;
    list.head = list.head.next;
    return removedHead;
  };

  list.contains = function(target) {
    if (list.head === null) {
      return false;
    } else {
      var node = list.head;
      while (node !== null) {
        if (node.value === target) {
          return true;
        } else {
          node = node.next;
        }
      }
      return false;
    }
  };

  list.returnList = function() {
    // define results equal to an array conraining the string 'HEAD'
    var results = ['HEAD'];
    // define node as equal to list.head
    var node = list.head;
    // while node !== null
    while (node !== null) {
      // push(node.value into results);
      results.push(node.value);
      // set node equal to node.next
      node = node.next;      
    }
    // push 'TAIL' to results
    results.push('TAIL');
    // return results
    return results;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 list.addToTail -> O(1);
 list.removeHead -> O(1);
 list.contains -> O(n);
 */
