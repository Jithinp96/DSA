function heapSort(array) {
    buildMaxHeap(array)

    for(let i=array.length-1; i>0; i--) {
        [array[0], array[i]] = [array[i], array[0]]
        heapifyDown(array, 0 ,i)
    }
    return array
}

function buildMaxHeap(array) {
    const startIndex = Math.floor(array.length / 2)
    for(let i = startIndex; i>=0; i--) {
        heapifyDown(array, i, array.length)
    }
}

function heapifyDown(array, index, heapSize) {
    const leftChildIndex = 2*index+1
    const rightChildIndex = 2*index+2
    let largestIndex = index

    if(leftChildIndex < heapSize && array[leftChildIndex] > array[largestIndex]) {
        largestIndex = leftChildIndex
    }

    if(rightChildIndex < heapSize && array[rightChildIndex] > array[largestIndex]) {
        largestIndex = rightChildIndex
    }

    if(largestIndex !== index) {
        [array[index], array[largestIndex]] = [array[largestIndex], array[index]]
        heapifyDown(array, largestIndex, heapSize)
    }
}

const arr = [4, 10, 3, 5, 1, 8]

console.log("Original array:", arr)
console.log("Sorted array:", heapSort(arr.slice()))