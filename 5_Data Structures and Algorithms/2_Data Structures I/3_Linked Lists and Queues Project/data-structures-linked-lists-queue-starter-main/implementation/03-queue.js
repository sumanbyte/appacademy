const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
          this.head = newNode;
          this.tail = this.head;
        }
    
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        }
    
        this.length++;
        return this.length;
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (!this.head) {
            return null;
        }
        let removedNode;
        if (this.head) {
            if (this.length == 1) {
                removedNode = this.head;
                this.head = null;
                this.tail = null;
            } else {
                removedNode = this.head;
                this.head = this.head.next;
            }
        }
        this.length--;

        return removedNode.value;
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
