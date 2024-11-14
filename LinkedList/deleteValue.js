class node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor () {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize () {
        return this.getSize
    }

    removeValue (value) {
        if(this.isEmpty()) {
            return null
        }

        if (value === this.head.value) {
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

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        }
        else {
            let curr = this.head
            let listValues = ''
            while(curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log("List: ", listValues);
        }
    }
}

const list = new linkedList()
