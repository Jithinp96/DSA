class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new TreeNode(value)
        if(this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if(node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode)
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode
            }
            else {
                this.insertNode (node.right, newNode)
            }
        }
    }

    inOrderTraversal(callback) {
        this.inOrder(this.root, callback)
    }

    inOrder(node, callback) {
        if(node !== null) {
            this.inOrder(node.left, callback)
            callback(node.value)
            this.inOrder(node.right, callback)
        }
    }
}

const tree = new BinaryTree()
tree.insert(10)
tree.insert(1)
tree.insert(20)
tree.insert(30)
tree.insert(3)
tree.insert(65)

tree.inOrderTraversal(value => console.log(value))