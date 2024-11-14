function insertionSort (arr) {
    for (let i=1; i<arr.length;i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j]
            j = j - 1;
        }

        arr[j+1] = key
    }

    return arr
}

let array = [32,1,43,2,21,12]

console.log("Unsorted array:", array);
console.log("Sorted array:", insertionSort(array));