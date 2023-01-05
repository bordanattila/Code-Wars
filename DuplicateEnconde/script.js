// The goal of this exercise is to convert a string to a new string 
// where each character in the new string is "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    //   array for letter firs appearance
      const once = [];
    //   array for letter multiple appearance
      const twice = []
    //   array for return value
      const result = [];
    
      const length = word.length
    // loop through the input string
      for (let i = 0; i < length; i++) {
    //     get letter in lower case
        const letter = word[i].toLowerCase()
    //     if letter already appeared push it in second apperance array, else push in first appearance
        if (once.includes(letter)) {
          twice.push(letter)
        } else {
          once.push(letter)
        }
      }
    // loop through word again
      for (let x = 0; x < length; x++) {
        //     get letter in lower case
        const letter = word[x].toLowerCase()
    //     if letter is in twice push ")" to result, else push "("
        if (twice.includes(letter)) {
          result.push(")")
        } else {
          result.push("(")
        }
      }
      return (result.join(""))
    }
    
// elegant solution
function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}