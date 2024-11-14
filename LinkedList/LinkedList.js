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

    insert(value, index) {
        if(index < 0 || index > this.size) {
            console.log("Invalid size");
            return
        }
        if(index === 0 ){
            this.prepend(value)
        }
        else {
            const node = new Node (value)
            let prev = this.head
            for (let i = 0; i<index-1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index) {
        let removedNode
        if(index === 0) {
            removedNode = this.head
            this.head = this.head.next
        }
        else {
            let prev = this.head
            for(let i=0; i<index-1; i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        console.log("Removed Node: ", removedNode.value);
        this.size--
    }

    removeValue (value) {
        if(this.isEmpty()) {
            console.log("List is empty");
            return null
        }
        if(value === this.head.value) {
            this.head = this.head.next
            this.size--
            return value
        }
        else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
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

const list = new linkedList()

console.log("Is list empty: ", list.isEmpty());
console.log("List Size: ", list.getSize());
list.print()

list.prepend(10)
list.print()

list.prepend(20)
list.print()

list.prepend(30)
list.print()

list.append(40)
list.print()

list.insert(15, 0)
list.insert(25, 2)
list.print()
console.log(list.getSize());

list.removeFrom(2)
list.print()

list.removeValue(40)
list.print()

list.removeValue(15)
list.print()