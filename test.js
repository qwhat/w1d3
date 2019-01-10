function position(apple) {
  var results={};
  var appleArray= apple.split('');

  for (var  i=0; i < appleArray.length; i++) {
    var currentLetter = results[appleArray[i]];

    if (results[appleArray[i]]) {
      results[appleArray[i]].push(i)
    }
    else {
      results[appleArray[i]] = [i];
    }
  }
  delete results[" "];
  return results;
}
console.log(position('lighthouse in the house'));
