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
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };