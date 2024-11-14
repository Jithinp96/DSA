let arr = [1,2,3,3,4,5,1,2,3];
let uniqueArr = []

for(let i=0; i<arr.length; i++) {
    let isUnique = true;
    for( let j=i+1; j<arr.length; j++){
        if(arr[i] === arr[j]) {
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        uniqueArr.push(arr[i]);
    }
}

console.log(uniqueArr);