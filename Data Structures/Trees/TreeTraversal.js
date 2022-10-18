//Traversing Trees
    //two approaches:
        //Bredth First Search(BFS): Start at root and work ACROSS the tree. Left to Right, Down, Left to Right, Down, Left to Right, Down, etc... You move across the tree horizontally before going down.
        //Depth First Search(DFS): Going vertically through the tree. 3 main ways to do a depth first search.
            //In Order
            //Pre Order
            //Post Order


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
    //Bredth First Search(BFS) implementaion
    bfs(){
        let data = [];
        let q = [];
        let node = this.root;

        q.push(this.root)
        while(q.length){
            node = q.shift();
            data.push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        return data;
    }
    //Depth First Search(DFS) implementation
    preOrder(){
        let data = [];
        let current = this.root;
        const traverse = (node) => {
            data.push(node.val);
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
        }
        traverse(current);
        return data;
    }
    postOrder(){
        let data = [];
        const traverse = (node) => {
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
            data.push(node.val)
        }
        traverse(this.root);
        return data;
    }
    inOrder(){
        let data = [];
        const traverse = (node) => {
            if(node.left)traverse(node.left);
            data.push(node.val)
            if(node.right)traverse(node.right);
            data.push(node.val)
        }
        traverse(this.root);
        return data;
    }
}