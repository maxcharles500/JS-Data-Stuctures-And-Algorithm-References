//Binary Search Trees
//Special binary tree where each node can still have AT MOST 2 child nodes, and the data is always sorted in a particular order...
    //every parent node has at most 2 children
    //every node to the left of the parent node is always less than the parent
    //every node to the right of the parent node is always greater than the parent node

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(val === current.val) return undefined;
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(val > current.val){
                    if(current.left === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }
    find(val){
        if(this.root === null) return false;

        let current = this.root;
        let found = false;

        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if(val > current.val){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found)return false;
        return current;
    }
}
//Big O of BST's 
    //Insertion -> O(log n)
        //not if its a one sided tree
    //Removal -> 
    //Searching -> O(log n)
        //not if its a one sided tree
    //Access -> 