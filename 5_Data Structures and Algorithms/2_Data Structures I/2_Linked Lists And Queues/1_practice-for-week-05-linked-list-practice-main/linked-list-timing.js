const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// code for the linked list timing benchmark of linked list add to head 
let start = Date.now();
let lladdToHead = new LinkedList();
for(let i=0; i<150000; i++){
    lladdToHead.addToHead(i)
}
let end = Date.now();
console.log(`Timing of the linked list add to head: ${end - start} ms`)

// for the doublylinked list add to head method timing
let dladdToHead = new DoublyLinkedList();
start = Date.now();
for(let i=0; i<150000; i++){
    dladdToHead.addToHead(i)
}
end = Date.now();

console.log(`Timing of the doublylinked list add to head: ${end - start} ms`)

// benchmark of add to tail of linked list
let lladdToTail= new LinkedList();
start = Date.now();
for(let i=0; i<15000; i++){
    lladdToTail.addToTail(i)
}
end = Date.now();

console.log(`Timing of the linked list add to tail: ${end - start} ms`)

// benchmark of doublylinked list addtotail method.
let dladdToTail= new DoublyLinkedList();
start = Date.now();
for(let i=0; i<150000; i++){
    dladdToTail.addToTail(i)
}
end = Date.now();

console.log(`Timing of the doubly linked list add to tail: ${end - start} ms`)