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

function styleResult(result, score) {
  result.classList.remove('easy');
  result.classList.remove('difficult');
  if (score >= 60) {
    result.classList.add('easy');
  } else {
    result.classList.add('difficult');
  }
}

function resultExplained(resultExp, score) {
  let explain = '';
  const explainTexts = [
    'Very easy to read.',
    'Easy to read.',
    'Fairly easy to read.',
    'Plain English.',
    'Fairly difficult to read.',
    'Difficult to read.',
    'Very difficult to read.'
  ];
  if (score < 30) {
    explain = explainTexts[6];
  } else if (score >= 30 && score < 50) {
    explain = explainTexts[5];
  } else if (score >= 50 && score < 60) {
    explain = explainTexts[4];
  } else if (score >= 60 && score < 70) {
    explain = explainTexts[3];
  } else if (score >= 70 && score < 80) {
    explain = explainTexts[2];
  } else if (score >= 80 && score < 90) {
    explain = explainTexts[1];
  } else if (score >= 90) {
    explain = explainTexts[0];
  }
  resultExp.innerHTML = explain;
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#score-button").addEventListener("click", function () {
    const mainText  = document.querySelector("#main-text").value;
    const language  = document.querySelector("#language").value;
    const result    = document.querySelector("#result");
    const resultExp = document.querySelector("#result-explained");
    let run = new Readability(mainText, language);
    run.calcScore();
    let score = run.score;
    result.innerHTML = score;
    styleResult(result, score);
    resultExplained(resultExp, score);
  });
});
