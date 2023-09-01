// Node class is implemented for you, no need to look for bugs here!
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

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length >= 1) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            let curr = this.head;
            
            while (curr.next) {
                curr = curr.next;
            }
            
            curr.next = newNode;
            newNode.prev = curr;
            newNode.next = null;
            this.tail = newNode;
        }
        this.length++;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        let removedHead;
        if(this.head){
            removedHead = this.head;
            if(this.length == 1){
                this.head = null;
                this.tail = null;
                
            }else if(this.length == 2){
                this.head = this.tail;
            }else{
                let newHead = this.head.next;
                newHead.prev = null;
                this.head = newHead
            }

            
            this.length--;
            return removedHead.value
        }

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if(this.head){
            const removedTailVal = this.tail.value;
            if(this.length == 1){
                this.head = null;
                this.tail = null;
            }else if(this.length == 2){
                this.tail.prev = null;
                this.head.next = null;
                this.tail = this.head
            }else{
                this.tail = this.tail.prev;
                this.tail.next.prev = null;
                this.tail.next = null;

            }
            this.length--;
            return removedTailVal;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if(this.head) return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if(this.tail) return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
    }
}

let ll = new DoublyLinkedList();
ll.addToHead(5);
ll.addToHead(4);
ll.addToHead(3);
console.log(ll.length)
ll.removeFromHead()
console.log(ll.length)
console.log(ll.head)



module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
