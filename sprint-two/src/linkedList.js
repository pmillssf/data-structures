var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null && list.tail === null) {
      var initialNode = Node(value);
      list.head = initialNode;
      list.tail = initialNode;
    } else if (list.head === list.tail) {
      var newNode = Node(value);
      list.tail = newNode;
      list.head.next = list.tail;
    } else {
      var newNode = Node(value);
      list.head.next = list.tail.next;
      list.tail.next = list.tail;
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
    // define node as equal to list.head
    // while node !== null
      // push(node.value into results);
      // set node equal to node.next
    // push 'TAIL' to results
    // return results

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
