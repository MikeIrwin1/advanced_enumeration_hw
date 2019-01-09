const AnagramFinder = function (word) {
  this.word = word;
}

// AnagramFinder.prototype.parseArray = function (array) {
//   return array.map((word) => {
//     return word.split('').sort().join('');
//   })
// };

AnagramFinder.prototype.parseWord = function (word) {
  return word.split('').sort().join('');
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {

  let parsedWord = this.parseWord(this.word);
  let results = [];
  return otherWords.filter((word) => {
    return this.parseWord(word) === parsedWord;
  })
}

module.exports = AnagramFinder;
