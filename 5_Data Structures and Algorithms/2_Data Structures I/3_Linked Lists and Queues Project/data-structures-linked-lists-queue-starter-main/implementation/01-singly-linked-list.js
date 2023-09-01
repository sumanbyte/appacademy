// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        let myNode = new SinglyLinkedNode(val)
        if(!this.head){
            this.head = myNode
        }else{
            myNode.next = this.head;
            this.head = myNode
        }

        this.length++;

        return this
        // Write your hypothesis on the time complexity of this method here
        /*
        The time complexity of this method is bigO of 1. since the operation takes constant time.
        */
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        /*
        The time complexity of this operation is bigO of n. since we are traversing n times.
         */
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        }else{
            let curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = newNode;
        }

        this.length++;

        return this;
    }

    removeFromHead() {
        // Remove node at head
        if(!this.head){
            return;
        }else{
            let removedHead = this.head;
            this.head = this.head.next;
            this.length--;
            return removedHead;
        }
        


        // Write your hypothesis on the time complexity of this method here
        /* 
        Since the operation takes constant time it's bigO of 1.
        */
    }

    removeFromTail() {
        // Remove node at tail
        if(this.head){
            if(this.length == 1){
                this.head = null;
                this.length--;
                return;
            }
            let curr = this.head;
            
            for(let i=1; i<this.length-1; i++){
                curr = curr.next;
            }
            this.length--;
            let lastNode = curr.next;
            curr.next = null;
            return lastNode
        }

        // Write your hypothesis on the time complexity of this method here
        /*
        since we are traversing through the second last node it's bigO of n;
        */
    }

    peekAtHead() {
        // Return value of head node
        if(this.head){
            return this.head.value;
        }
        // Write your hypothesis on the time complexity of this method here
        // bigO of 1
    }

    print() {
        // Print out the linked list
        if(this.head){
            let curr = this.head;
            while(curr){
                console.log(curr.value)
                curr = curr.next;
            }
        }
        // Write your hypothesis on the time complexity of this method here
        // bigO of n;
    }
}


module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
