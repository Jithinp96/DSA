function quickSort (array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[array.length - 1]

    let left = []
    let right = []

    for (let i=0; i<array.length - 1; i++) {
        if (array[i] <= pivot) {
            left.push(array[i])
        }
        else {
            right.push(array[i])
        }
    }

    return quickSort(left).concat(pivot, quickSort(right))
}

const arr = [2, 8, 3, 74, 9, 44, 76, 8, 3]
console.log("Original array: ", arr);
console.log("Sorted array: ", quickSort(arr ));