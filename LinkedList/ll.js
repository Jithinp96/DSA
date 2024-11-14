class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    preppend(newNode) {
        if(this.head === null) {
            this.head = newNode
            this.tail = newNode
        }

        else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    append(newNode) {
        if(this.head === null) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode

        }
    }

    delete(value) {
        if(this.head.value === value) {
            this.head = this.head.next
            return value
        }
        else {
            let prev = this.head
            while (prev.next && prev.next.value!==value) {
                prev = prev.next
            }
            if (prev.next) {
                const removedNode = prev.next
                prev.next = removedNode.next
                return value
            }
        }
    }

    display() {
        if(this.head === null) {
            console.log("LL is empty");
        }
        else {
            let curr = this.head
            while (curr) {
                console.log(curr.value);
                curr = curr.next
            }
        }
    }
}

const list = new linkedList();

list.preppend(new Node(2))
list.preppend(new Node(3))
list.preppend(new Node(4))

list.append(new Node(1))
list.delete(1)
list.display()

function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor ((leftIndex+rightIndex)/2)
        if(target === arr[middleIndex]) {
            return middleIndex
        }

        if(target <arr[middleIndex]) {
            rightIndex = middleIndex - 1
        }

        else{ 
            leftIndex = middleIndex + 1
        }
    }
}

console.log(binarySearch([1,2,3,4,5], 2));