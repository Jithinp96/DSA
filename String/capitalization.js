function capitailzation(str) {
    let string = str.split('');
    for (let i = 0; i < string.length; i++) {
      if (i == 0) {
        string[i] = string[i].toUpperCase();
      } else {
        string[i] = string[i].toLowerCase();
      }
    }
    return string.join('');
  }
  
  console.log(capitailzation('javascript'));
  