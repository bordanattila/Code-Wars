// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

function solution(number) {
    // create arrays of Roman numbers
    const thousands = ["M", "MM", "MMM"];
    const hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const units = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    // put arrays in a new array to itterate through them
    const arrays = [units, tens, hundreds, thousands]
    // convert argument to string to split it into digits
    const num = String(+number).split("");
    const numLength = num.length;
    const arrayIndex = []; 
    const romanNumbers = [];
    // convert string digits into integer and push them into array backwards to identify Roman array
    for (i = numLength-1; i >= 0; i--) {
      let integer = parseInt(num[i])
      arrayIndex.push(integer)
    };
    // get the array and extract the corresponding Roman number for the digits
    for (i = 0; i < numLength; i++) {
      let roman = arrays[i]
      let romanIndex = arrayIndex[i]
      romanNumbers.unshift(roman[romanIndex-1])
    }
    return (romanNumbers.join(""))
  }