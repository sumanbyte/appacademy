// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    return this.head;
  }

  listLength() {
    let first = this.head;
    let length = 1;

    while (first.next != null) {
      first = first.next;
      length++;
    }
    // Returns the length of the list
    // Implement in O(n) and in O(1) time complexity
    return length;
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    let first = this.head;
    let sum = first.value;

    while (first.next != null) {
      first = first.next;
      sum += first.value;
    }

    return sum;
    // Write your hypothesis on the time complexity of this method here
    /*
        this has the time complexity of O(1) because for a n size array the while loop runs n times.
         */
  }

  averageValue() {
    // Returns the average value of all the nodes
    let first = this.head;
    let sum = first.value;
    let count = 1;

    while (first.next != null) {
      first = first.next;
      sum += first.value;
      count += 1;
    }

    return sum / count;
    // Write your hypothesis on the time complexity of this method here
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    let first = this.head;
    let i = 0;

    while (i != n) {
      first = first.next;
      i++;
    }

    return first;
    // Write your hypothesis on the time complexity of this method here
  }

  findMid() {
    // Returns the middle node
    let curr = this.head;
    let count = 0;

    while (curr.next != null) {
      curr = curr.next;
      count++;
    }

    let index = Math.floor(count / 2);
    let i = 0;
    curr = this.head;

    while (i < index) {
      curr = curr.next;
      i++;
    }

    return curr;
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here
  }

  reverse() {
    // Returns a new reversed version of the linked list

    let reversedList = new SinglyLinkedList();

    let current = this.head;
    while (current) {
      let newNode = new SinglyLinkedNode(current.value);
      newNode.next = reversedList.head;
      reversedList.head = newNode;
      current = current.next;
    }
    return reversedList
  
    // Write your hypothesis on the time complexity of this method here
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    let prev = null;
    let middle = this.head;
    let end = middle.next;

    while (middle) {
      middle.next = prev;
      prev = middle;
      middle = end;
      end = end?.next ?? null;
    }

    this.head = prev;
  
    // Write your hypothesis on the time complexity of this method here
  }
}



class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
  
    }
    this.length++
    return this.head;
  }

  findMid() {
    // Returns the middle node
    let index = Math.round(this.length / 2);
    let i = 1;
    let curr = this.head;

    while (i != index) {
      curr = curr.next
      i++;
    }

    
    return curr;
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here
  }

  reverse() {
    // Returns a new reversed version of the linked list
    let reversedList = new DoublyLinkedList();

    let current = this.head.next;
    let newNode = new DoublyLinkedNode(this.head.value);
    reversedList.head = newNode;
    reversedList.tail = reversedList.head;

    while (current) {
      let newNode = new DoublyLinkedNode(current.value);
      newNode.next = reversedList.head;
      reversedList.head.prev = newNode;
      reversedList.head = newNode;

      current = current.next;
    }

    return reversedList;

    // Write your hypothesis on the time complexity of this method here
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    let current = this.head;

    while (current) {
      let nextNode = current.next;
      current.next = current.prev;
      current.prev = nextNode;
      current = current.prev;
    }

    current = this.head;
    this.head = this.tail;
    this.tail = current;
  }
    // Write your hypothesis on the time complexity of this method here

  print(){
    let curr = this.head;

    while(curr){
      console.log(curr.value + " ");
      curr = curr.next;
    }
  }
}

let list1 = new DoublyLinkedList();

list1.addToTail(1);
list1.addToTail(2);
list1.addToTail(3);
list1.addToTail(4);
list1.addToTail(5);
list1.addToTail(6);

list1.print()
list1.reverse()
list1.print()

// console.log(list1.reverse());

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
