function countIndex(words) {
  var words = words.toLowerCase().split('');//normalizes all the letters in the string and seperates each element into a string in an array "words"
  var letters = {};//empty object: letters to push our words

  for (i = 0; i < words.length; i++) {//words.length here is 22
    if (!letters[words[i]]){//if key does not exist
      letters[words[i]] = [i]//create, within object: letters, key: element[i] = [i]
    }
    else {//otherwise (if key exists for element[i])
    letters[words[i]].push(i)//add [i] to element[i]
    }
  }
  delete letters[" "];//removes key: " " and all its variables
  return letters;// returns object letters after running it through the loop
}

console.log(countIndex('Lighthouse in the house'))
