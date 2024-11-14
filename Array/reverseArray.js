let arr = [1,2,3,4,5]
let lastIndex = arr.length - 1

for (let i=0; i<lastIndex/2; i++) {
    let temp = arr[i]
    arr [i] = arr[lastIndex-i]
    arr [lastIndex-i] = temp
}

console.log("Reversed Array: ", arr);