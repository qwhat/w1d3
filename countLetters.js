function countLetters(words) {
  var words = words.toLowerCase().split("");
  var letters = {};
  for (help of words) {
    if (!letters[help]) {
      letters[help] = [words]
    }
    else {
      letters[help] = [words]
      letters[help].push(words)
    }
  }
  return letters
}
console.log(countLetters("Lighthouse in the house"));
