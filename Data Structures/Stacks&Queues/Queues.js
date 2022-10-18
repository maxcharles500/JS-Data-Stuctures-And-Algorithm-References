//Queues 
//A data structure that abides by the FIFO principle: First In First out
    //the first element added to a Q will be the first element removed from the Q ie; add the the bottom and remove from the top...
    //Works like a line at the store; Video game Q; Printin stuff on your computer;
//array implementation
//push and shift
let q = [];
q.push('first')
console.log(q)
q.push('second')
console.log(q)
q.push('third')
console.log(q)
q.shift()
console.log(q)
q.shift()
console.log(q)
q.shift()
console.log(q)
//unshift and pop
let q2 = [];
q2.unshift(1)
console.log(q2)
q2.unshift(2)
console.log(q2)
q2.unshift(3)
console.log(q2)
q2.pop()
console.log(q2)
q2.pop()
console.log(q2)
q2.pop()
console.log(q2)
//Singly Linked List implementation
class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first)return null;
        firstNode = this.first
        if(this.first = this.last){
            this.last = null;
        }
        this.first = this.first.next
        this.size--;
        return firstNode.val;
    }
}
//Big O of Queues 
    //Insertion -> O(1)
    //Removal -> O(1)
    //Searching -> O(N)
    //Access -> O(N)