const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('');
}

IsogramFinder.prototype.isIsogram = function () {
  const charCounter = {};
  let isogram = true;
  this.word.forEach((letter) => {
    if (charCounter[letter]) {
      charCounter[letter] += 1;
    }
    else {
      charCounter[letter] = 1;
    }
    if (charCounter[letter] > 1){
      isogram = false;
    }
  })
  return isogram;
}

module.exports = IsogramFinder;
