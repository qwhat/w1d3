function countLetters(words) {//function countLetters count each unique letter
  var words = words.toLowerCase().split(" ").join("").split("");//normalize all elements in our "words"
  var letters = {};//empty object to add keys
  for (alphabet of words) {//for..of loop to go through every string in our array
    if (!letters[alphabet]) {//if string is !key ->create key for string and =1 to that key
      letters[alphabet] = 1 
    }
    else {//else +1 associated key
      letters[alphabet] += 1
    }
  }
  return letters
  //should also return how many times a letter is repeated
}
console.log(countLetters("Lighthouse in the house"));
