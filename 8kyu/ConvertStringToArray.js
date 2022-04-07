/* Write a function to split a string and convert it into an array of words.

* "Robin Singh" ==> ["Robin", "Singh"]
* "I love arrays they are my favorite" ==> ["I", "love", "arrays", */

function stringToArray(string){
    return string.split(' ')
  }

// REFACTOR (Arrow Function)

const stringToArray = string => string.split(' ')