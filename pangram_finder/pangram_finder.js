const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().split('');
}

PangramFinder.prototype.isPangram = function () {
  const checkPangram =  this.alphabet.every((letter) => {
     return this.phrase.includes(letter)
  });

  return checkPangram;

  // const uniqueLetters = new Set(this.phrase.toLowerCase())
  // if (uniqueLetters.size === 26) {
  //   return true;
  // }
  // else {
  //   return false;
  // }
};

module.exports = PangramFinder;
