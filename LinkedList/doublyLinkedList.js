class Node {
    constructor(value) {
        this.prev = null
        this.value = value
        this.next = null
    }
}

class doublyLL {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(newNode) {
        
        if(this.head === null){
            this.head = newNode
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
        }
        this.tail = newNode;
    }

    prepend (newNode) {
        if(this.head === null) {
            this.head = newNode
        }
        else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
    }

    display() {
        let curr = this.head
        while (curr) {
            console.log(curr.value);
            curr = curr.next
        }
    }

    displayReverse () {
        let curr = this.tail
        console.log("Reverse: ");
        while (curr) {
            console.log(curr.value);
            curr = curr.prev
        }
    }

}

let list = new doublyLL();

list.append(new Node (3))
list.append(new Node (4))
list.prepend(new Node(2))

list.display()
list.displayReverse()