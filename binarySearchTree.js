class Node {
  constructor(value) {
      this.value = value
      this.left = null
      this.right = null
  }
}
   
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  search(value) {
    return this.searchNode(this.root, value)
  }

  searchNode(node, value) {
    if (node === null) {
      return false
    }
    if (value < node.value) {
      return this.searchNode(node.left, value)
    } else if (value > node.value) {
      return this.searchNode(node.right, value)
    } else {
      return true
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      node.left = this.deleteNode(node.left, value)
      return node
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value)
      return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      if (node.left !== null && node.right !== null) {
        let temp = this.getMinValueNode(node.right)
        node.value = temp.value
        node.right = this.deleteNode(node.right, temp.value)
        return node
      }
      if (node.left !== null) {
        node = node.left
      } else {
        node = node.right
      }
      return node
    }
  }

  getMinValueNode(node) {
    if (node.left === null) return node
    else return this.getMinValueNode(node.left)
  }

  // Preorder = root, left, right
  preorderTraversal() {
    return this.preorderTraversalHelper(this.root, [])
  }

  preorderTraversalHelper(node, result) {
      if (node !== null) {
          result.push(node.value)
          this.preorderTraversalHelper(node.left, result)
          this.preorderTraversalHelper(node.right, result)
      }
      return result
  }

  // Inorder: Left -> Root -> Right
  inorderTraversal() {
    return this.inorderTraversalHelper(this.root, [])
  }

  inorderTraversalHelper(node, result) {
      if (node !== null) {
          this.inorderTraversalHelper(node.left, result)
          result.push(node.value);
          this.inorderTraversalHelper(node.right, result)
      }
      return result
  }

  // Postorder: Left -> Right -> Root
  postorderTraversal() {
    return this.postorderTraversalHelper(this.root, [])
  }

  postorderTraversalHelper(node, result) {
      if (node !== null) {
          this.postorderTraversalHelper(node.left, result)
          this.postorderTraversalHelper(node.right, result)
          result.push(node.value)
      }
      return result
  }

  findClosestValue(target) {
    let closest = this.root.value
    let currentNode = this.root
    while(currentNode !== null) {
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) { 
            closest = currentNode.value
        }
        if (target < currentNode.value) {
            currentNode = currentNode.left
        } else if (target > currentNode.value) {
            currentNode = currentNode.right
        } else {
            break
        }
    }
    return closest;
  }


  // Validate whether a tree is BST or not
  isValidBST() {
    return this.isValidBSTHelper(this.root, -Infinity, Infinity)
  }

  isValidBSTHelper(node, min, max) {
      if (node === null) return true

      if (node.data <= min || node.data >= max) return false

      return (
          this.isValidBSTHelper(node.left, min, node.data) &&
          this.isValidBSTHelper(node.right, node.data, max)
      );
  }
}

const bst = new BinarySearchTree()

bst.insert(9)
bst.insert(4)
bst.insert(17)
bst.insert(3)
bst.insert(6)
bst.insert(22)
bst.insert(5)
bst.insert(7)
bst.insert(20)
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(8)
bst.insert(12)
bst.insert(18)

console.log(bst.search(6))
console.log(bst.search(10))

bst.delete(6)
console.log(bst.search(6))

console.log("Preorder Traversal:", bst.preorderTraversal())
console.log("Inorder Traversal:", bst.inorderTraversal())
console.log("Postorder Traversal:", bst.postorderTraversal())
   
console.log("Closest value to 12:", bst.findClosestValue(12))
console.log("Is BST:", bst.isValidBST())