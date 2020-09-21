// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
    if (myString === "") {
        return ''
    } else {
        return reverseString(myString.substring(1)) + myString.charAt(0);
    }   
}

function isPalindrome(myString) {
    let length = myString.length;
    if (length <= 1) {
        return true
    }
    if (myString[0] !== myString[length - 1]) {
        return false
    }
    return isPalindrome(myString.slice(1, -1))
}

function addUpTo(myArray, index) {
    if (index) {
        return myArray[index] + addUpTo(myArray, --index)
    } else {
        return myArray[index]
    }
}

function maxOf(myArray) {
    if (myArray.length === 1) {
        return myArray[0];
    } else {
        return Math.max(myArray.pop(), maxOf(myArray));
    }
}

function includesNumber(myArray, number) {
    if (myArray.length === 0) {
        return false;
    } else if (myArray[0] === number){
        return true
    } else {
        return includesNumber(myArray.slice(1), number)
    }
}