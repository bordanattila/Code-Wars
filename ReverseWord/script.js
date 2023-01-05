const reverseWords = (str) => {
    //create empty array for return value
    const reversed = [];
    // split input into words
    const text = str.split(' ')
    // loop through each word
    for (let i = 0; i < text.length; i++) {
        const word = text[i]
        // loop through each letter in the word from back
        for (let x = word.length; x > 0; x--) {
            // push letters into array
            reversed.push(word[x])
        }
        // push a space in the array in every loop except the last one
        if (i < (text.length - 1)) {
            reversed.push(" ")
        }
    }
    return (reversed.join(""))
}