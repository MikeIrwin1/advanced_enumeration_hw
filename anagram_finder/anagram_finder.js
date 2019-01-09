const AnagramFinder = function (word) {
  this.word = word;
}

// AnagramFinder.prototype.parseArray = function (array) {
//   return array.map((word) => {
//     return word.split('').sort().join('');
//   })
// };

AnagramFinder.prototype.parseWord = function (word) {
  let lowerCase = word.toLowerCase();
  return lowerCase.split('').sort().join('');
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let parsedWord = this.parseWord(this.word);

  return otherWords.filter((word) => {
    if (word === this.word){
      return
    }
    else {
      return this.parseWord(word) === parsedWord;
    }
  })
}

module.exports = AnagramFinder;
