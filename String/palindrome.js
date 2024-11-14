function palindrome (str) {
    let reverse = ''
    let string = str.toLowerCase()

    for (let i = string.length-1; i>=0; i--) {
        reverse +=string[i];
    }
    
    if (reverse === string) {
        console.log(str, " is a palindrome");
    }
    else {
        console.log(str, " is not a palindrome");
    }
}

palindrome('Malayalam');