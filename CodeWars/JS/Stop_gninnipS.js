function spinWords(words) {
    words=words.split(' ').map(element => {
        if(element.length>=5){
            return element.split('').reverse().join('')
        }
        else return element
    });
    return words.join(' ')
}
spinWords('Hey fellow warriors');
