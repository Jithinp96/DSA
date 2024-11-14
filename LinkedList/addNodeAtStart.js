class Node {
    constructor (value) {
        this.value = value,
        this.next = null
    }
}
class linkedList {
    constructor (){
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size ===0
    }
    getSize () {
        return this.size
    }
    //ADDING A NEW NODE IN STARTING OF A LL
    prepend (value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    //FOR PRINTING A LL
    print(){
        if(this.isEmpty()) {
            console.log("List is empty") ;
        }
        else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log("List: ", listValues);
        }
    }
}

let list = new linkedList()

list.prepend(10)
list.print()
list.prepend(20)
list.print()
list.prepend(30)
list.print()