// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    //create empty variable for highest and lowest
  let high = "";
  let low = "";
  //convert input string into an array to capture "-" sign
  const numArray = numbers.split(" ");

  const length = numArray.length
  //loop through the array
  for (let i = 0; i < length; i++) {
    //convert number to integer to capture multiple digit numbers
    const num = parseInt(numArray[i])
    
    if (low === "") {
      low = num
    }
     if (high === "") {
      high = num
    }
    if (low > num) {
      low = num
    }
    if (num > high) {
      high = num
    } 
  }
  return(high+" "+low)
}

// elegant solution
function highAndLow(numbers){
  const num = numbers.split(" ").map(Number)

  const max = Math.max.apply(null, num);
 
  const min = Math.min.apply(null, num);
 
  console.log(max+" "+min)
  }