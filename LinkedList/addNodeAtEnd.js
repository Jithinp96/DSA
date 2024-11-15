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
    //ADD VALUE AT THE END OF LL
    append(value){
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        }
        else {
            let prev = this.head
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node
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

list.append(10)
list.print()
list.append(20)
list.print()
list.append(30)
list.print()