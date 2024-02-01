// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    if(currentNode == null){
      return this.root = new TreeNode(val);
    }

    if(currentNode.val > val && currentNode.left == null){
      return currentNode.left = new TreeNode(val);
    }
    if(currentNode.val > val && currentNode.left != null){
      return this.insert(val, currentNode.left);
    }
    if(currentNode.val < val && currentNode.right == null){
      return currentNode.right = new TreeNode(val);
    }
    if(currentNode.val < val && currentNode.right != null){
      return this.insert(val, currentNode.right);
    }
  }

  search(val) {
    // Your code here
    let currentNode = this.root;

    while(currentNode !== null){
      if(val < currentNode.val){
        currentNode = currentNode.left;
      }else if(val > currentNode.val){
        currentNode = currentNode.right
      }else{
        return true
      }
    }

    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode == null){
      return;
    }
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left)
    this.preOrderTraversal(currentNode.right)
  }


  inOrderTraversal(currentNode = this.root) {
    if(currentNode === null){
      return;
    }
    // Your code here
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val)
    this.inOrderTraversal(currentNode.right)
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode == null){
      return;
    }
    this.postOrderTraversal(currentNode.left)
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    let queue = [];
    queue.push(this.root);

    while(queue.length > 0){
      const currentNode = queue.shift();
      console.log(currentNode.val);
      if(currentNode.left != null) queue.push(currentNode.left);
      if(currentNode.right != null) queue.push(currentNode.right)
    }
    
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here

      //      4
      //    /   \
      //   2     6
      //  / \   / \
      // 1   3 5   7
    const stack = [];
    stack.push(this.root);
    
    while(stack.length > 0){
      const currentNode = stack.pop();
      console.log(currentNode.val);
      if(currentNode.left != null) stack.push(currentNode.left)
      if(currentNode.right != null) stack.push(currentNode.right);
    }
}
}

module.exports = { BinarySearchTree, TreeNode };