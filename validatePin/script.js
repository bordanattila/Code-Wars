// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return `true`, else return `false`.

// "1234"   -->  `true`
// "12345"  -->  `false`
// "a234"   -->  `false`

function validatePIN(pin) {
    const number = [];
    const notNumber = [];

    const entered = pin.split("");

    for (let i = 0; i < entered.length; i++) {
        if (!isNaN(entered[i])) {
            number.push(entered[i])
        } else {
            notNumber.push(entered[i])
        }
    }

    if (number.includes("\n") || number.includes(" ")) {
        console.log("false")
    } else {

        if (notNumber.length === 0 && (number.length === 4 || number.length === 6)) {
            console.log("true")
        } else {
            console.log("false")
        }
    }
}


// elegant solution
function validatePIN(pin) {

    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);

    if (isCorrectLength && hasOnlyNumbers) {
        return true;
    }

    return false;

}