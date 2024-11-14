function revString (str) {
    if(str === "") {
        return '';
    }

    return revString(str.substring(1)) + str.charAt(0);
}

console.log(revString('Hello'));