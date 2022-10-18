//Doubly linked List
//A linked list is a data structure that contains a head(beginning), tail(end), and length property.
//Linked List consist of nodes, and each node has a value and a pointer to another node or null
//each node has a pointer pointing to the next node and a pointer pointing to the previous node

class Node{
    constuctor(val){
    this.val = val;
    this.next = null;
    this.previous = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //push takes in a value and creates a new node, once the new node is created its added to the end of the list
    push(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    //removes a node from the end of the DLL
    pop(){
        if(!this.head) return undefined;
        poppedNode = this.tail
        if(this.length = 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.previous;
            this.tail.next = null;
            poppedNode.previous = null;
        }
        this.length--;
        return poppedNode;
    }
    //removes a node from the beginning of the DLL
    shift(){
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.previous = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead
    }
    //unshift takes in a value and creates a new node, once the new node is created its added to the beginning of the list
    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //get takes in a number(representing a position or index) and returns the node at that position in the lists
    get(index){
        if(index < 1 || index >= this.length)return null;
        if(index <= this.length/2){
            let count = 0;
            let current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        return current;
        } else {
            let count = this.length - 1
            let current = this.tail;
            while(count !== index){
                current = current.previous;
                count--;
            }
        return current;
        }
    }
    //set takes in a value and a position/index and replaces the current node at tht index with the value passed in
    set(index, value){
        let currentNode = this.get(index)
        if(currentNode !== null){
        currentNode.val = value
        return true;
        }
        return false;
    } 
    //insert takes in a node and a position and inserts the node in tot the list at that position
    insert(index, value){
        if(index < 0 || index > this.length)return false;
        if(index === 0) return !!this.unshift(value);
        if(index === this.length) return !!this.push(value);
        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.previous = beforeNode;
        newNode.next = afterNode, afterNode.previous = newNode;

        this.length++;
        return true;
    }
    //remove takes in a position and removes the node at that position
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0)return this.shift();
        if(index === this.length - 1)return this.pop()

        let removeNode = this.get(index);

        removeNode.previous.next = removeNode.next, removeNode.next.previous = removeNode.previous;
        removeNode.previous = null, removeNode.next = null;

        this.length--;
        return removeNode;
    }
}

//Big O of doubly linked lists 

//DoublyLinkedList
    //Insertion -> O(1)
    //Removal -> O(1) 
    //Searching -> O(N)
    //Access -> O(N)

//SinglyLinkedList
    //Insertion -> O(1)
    //Removal -> O(1) or O(N) 
        //depends on where you're removing from. If removing from the beginning O(1) if from the end O(N)
    //Searching -> O(N)
    //Access -> O(N)

//Arrays
    //Insertion -> AVG:O(N)
    //Removal -> AVG:O(N)
    //Searching -> O(1)
    //Accessing -> O(1)