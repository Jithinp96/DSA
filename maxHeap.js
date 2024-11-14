class MaxHeap {
    constructor() {
        this.heap = []
    }

    buildHeap(array) {
        this.heap = array
        for(let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
            this.heapifyDown(i)
        }
    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    removeMax() {
        if(this.heap.length === 0) {
            return null
        }
        if(this.heap.length === 1) {
            return this.heap.pop()
        }

        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return max
    }

    heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2)
        while(index > 0 && this.heap[index] > this.heap[parent]) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
            index = parent
            parent = Math.floor((index - 1) / 2)
        }
    }

    heapifyDown(index) {
        let left = 2 * index + 1
        let right = 2 * index + 2
        let largest = index

        if(left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left
        }
        if(right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right
        }
        if(largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
            this.heapifyDown(largest)
        }
    }
}

const maxHeap = new MaxHeap()

maxHeap.buildHeap([5,2,4,6,7])
console.log("Max Heap: ", maxHeap.heap)

maxHeap.insert(10)
console.log("After Insert: ", maxHeap.heap)

maxHeap.removeMax()
console.log("After Remove: ", maxHeap.heap)