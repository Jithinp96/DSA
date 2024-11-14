class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(newNode) {
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue() {
        if (!this.front) {
            return null;
        }
        let temp = this.front;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        return temp.data;
    }

    display() {
        let temp = this.front;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let queue = new Queue();

queue.enqueue(new Node(4));
queue.enqueue(new Node(2));
console.log("Before DEQUEUE");
queue.display();
queue.dequeue();
console.log("After DEQUEUE");
queue.display();