class Node {
    constructor(value) {
        this.value=value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
    }

    append (nodeValue) {
        if(this.head == null){
            this.head=nodeValue
        }
        else {
            nodeValue.next = this.head
            this.head = nodeValue
        }
    }

    delete (value) {
        if(this.head == null) {
            console.log("list is empty");
        }

        else{
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if(prev.next) {
                let removedNode = prev.next
                prev.next = removedNode.next
            }
        }
    }

    display() {
        if(this.head==null){
            console.log("LL is empty");
        }
        else{
            let curr = this.head
            while (curr) {
                console.log(curr.value);
                curr = curr.next
            }
        }
    }
}

const list = new linkedList()

list.append(new Node(2))
list.append(new Node(3))
list.append(new Node(4))

list.delete(3)

list.display()