function bubbleSort(arr) {
    let len=arr.length
    let swapped
    do {
        swapped = false
        for (let i = 0; i<len; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true;
            }
        }
    } while (swapped)
    return arr
}

let array = [64, 34, 35, 36, 25, 12, 22, 11, 90]

console.log("Unsorted: ", array);
console.log("Sorted: ", bubbleSort(array));