let arr = [4,2,1,2,6]
let len = arr.length

for(let i=0; i<len-1; i++) {
    for(let j=0; j<len -1 -i; j++){
        if( arr[j] > arr[j+1]) {
            const temp = arr[j]
            arr[j]= arr[j+1]
            arr[j+1]=temp
        }
    }
}

console.log("Sorted Array: ", arr);