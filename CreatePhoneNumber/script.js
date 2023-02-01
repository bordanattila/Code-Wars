// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
    const phoneNumber = ["("];
    for (i=0; i<3; i++) {
      phoneNumber.push(numbers[i])
    }
    phoneNumber.push(")")
    phoneNumber.push(" ")
    for (i=3; i<6; i++) {
      phoneNumber.push(numbers[i])
    }
    phoneNumber.push("-")
    for (i=6; i<10; i++) {
      phoneNumber.push(numbers[i])
    }
    return(phoneNumber.join(""))
  }
  
  // elegant version
  function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx";
    
    for(i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return(format)
  }