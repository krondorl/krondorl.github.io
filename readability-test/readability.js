class Readability {
  constructor(text, language) {
    this.text      = text;
    this.language  = language;
    this.score     = 0;
    this.words     = 0;
    this.sentences = 0;
    this.syllables = 0;
  }

  calcWords() {
    this.words = this.text.split(' ').length;
  }

  calcSentences() {
    let sentences = this.text;
    let count = sentences.replace(/\w[.?!](\s|$)/g, "$1|").split("|").length;
    this.sentences = count - 1;
  }

  calcSyllablesHun() {
    let text = this.text.toLowerCase();
    this.syllables = text.match(/[aáuúüűoóöőiíeé]/g).length;
  }

  calcSyllablesEng() {
    let word = this.text.toLowerCase();
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    this.syllables = word.match(/[aeiouy]{1,2}/g).length;
  }

  calcScore() {
    this.calcWords();
    this.calcSentences();

    if (this.language == 'hun') {
      this.calcSyllablesHun();
    } else {
      this.calcSyllablesEng();
    }

    if ((this.words > 0) &&
        (this.syllables > 0) && (this.sentences > 0)) {
      this.score = 206.835
        - 1.015 * (this.words / this.sentences)
        - 84.6 * (this.syllables / this.words);
      this.score = parseInt(this.score);
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#score-button").addEventListener("click", function () {
    const mainText = document.querySelector("#main-text").value;
    const language = document.querySelector("#language").value;
    const result   = document.querySelector("#result");
    let run = new Readability(mainText, language);
    run.calcScore();
    result.innerHTML = run.score;
  });
});
