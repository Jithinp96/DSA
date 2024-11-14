class MinHeap {
    constructor() {
        this.heap = []
    }

    buildHeap(array) {
        this.heap = array
        for(let i = Math.floor(this.heap.length / 2); i>=0; i--) {
            this.heapifyDown(i)
        }
    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    removeMin() {
        if(this.heap.length === 0) {
            return null
        }
        if(this.heap.length === 1) {
            return this.heap.pop()
        }
        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return min
    }

    heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2)
        while(index > 0 && this.heap[index] < this.heap[parent]) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
            index = parent
            parent = Math.floor((index - 1) / 2)
        }
    }

    heapifyDown(index) {
        let left = 2 * index + 1
        let right = 2 * index + 2
        let smallest = index
        
        if(left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left
        }
        if(right<this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right
        }
        if(smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
            this.heapifyDown(smallest)
        }
    }
}

const minHeap = new MinHeap()

minHeap.buildHeap([5,2,8,3,1])
console.log("Min Heap: ", minHeap.heap)

minHeap.insert(4)
console.log("After insert: ", minHeap.heap)

minHeap.removeMin()
console.log("After remove: ", minHeap.heap)