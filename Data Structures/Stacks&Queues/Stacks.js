//Stacks
//A data structure that abides by the LIFO principle: Last In First out
    //the last element added to a stack will be the first element removed from the stack ie; add the the top and remove from the top...
//array implementation
//push and pop
let stack = [];
stack.push('google')
console.log(stack)
stack.push('instagram')
console.log(stack)
stack.push('youtube')
console.log(stack)
stack.pop()
console.log(stack)
stack.pop()
console.log(stack)
stack.pop()
console.log(stack)

//shift and unshift
let stack2 = [];
stack2.unshift('hello')
console.log(stack2)
stack2.unshift('hi')
console.log(stack2)
stack2.unshift('howdy')
console.log(stack2)
stack2.shift()
console.log(stack2)
stack2.shift()
console.log(stack2)
stack2.shift()
console.log(stack2)

//SinglyLinkedList implementation
class Node {
    constuctor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let node = new Node(val);
        if(!this.first){
            this.first = node;
            this.last = node;
        } else if(this.size >= 1){
            let firstNode = this.first;
            this.first = node;
            node.next = firstNode;
        }
        this.size++;
        return this.size;
    }
    pop(){
        if(!this.first) return null;
        let firstNode = this.first;
        if(this.first === this.last){
            this.first = null;
            this.last = null;
        } else {
            this.first = firstNode.next;
        }
        this.size--;
        return firstNode.val;
    }
}

//Big O of Stacks 
    //Insertion -> O(1)
    //Removal -> O(1)
    //Searching -> O(N)
    //Access -> O(N)