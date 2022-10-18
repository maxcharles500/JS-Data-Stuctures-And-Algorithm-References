//Singly linked List
//A linked list is a data structure that contains a head(beginning), tail(end), and length property.
//Linked Lists consist of nodes, and each node has a value and a pointer to another node or null
//each node only has a pointer pointing to the next node
//Linked list is like a skyscraper with no elevator... if you want to go to the 5th node you must first go to the first second third and fourth nodes.
    //Lists vs Arrays
        //Lists 
            //Do not have indexes
            //Connected via nodes with a NEXT pointer
            //Random access is not allowed(you must start at the beginning and travel through each node individually *NO ELEVATOR*)
        //Arrays
            //indexed in order starting at 0
            //insertion and deletion can be expensive(depending on where you insert or delete every element may have to be re-indexed)
            //can quickly access the stored data through indexes


//Each node will store a piece of data - Val
//Each node will have a pointer referencing the next node - next

class Node {
    constuctor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    //add a node to the end of the linked list
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
    }
    //remove a node from the end of the linked list
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    //remove a node from the beginning of the linked list
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.lenght--;
        return currentHead;
    }
    //add a node to the beginning of the linked list
    unshift(val){
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++;
        return this;
    }
    //get takes in a number and returns the node at that position(index) in the list. the fist position is position 0
    get(index){
        if(index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        while(count !== index){ 
            current = current.next;
            count++;
        }
        return current;
    }
    //set takes a position(index) and a value, and updates the current value at that position to the value passed in
    set(index, value){
       let foundNode = this.get(index);
       if(foundNode){
           foundNode.val = value
           return true;
       }
       return false;
    }
    //insert adds a new node to the list at a specific position
    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === this.length){
            this.push(value);
            return true;
        }
        if(index === 0){
            this.unshift(value);
            return true;
        }
        let prev = this.get(index-1)
        let newNode = new Node(value)
        let temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true;
    }
    //remove takes in a position or index and removes the value/node at that position/index
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.shift();
        let prevNode = this.get(index - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
    //reverse takes in a list and reverses the order of the list in place
    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

//Big O of singly linked lists 

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