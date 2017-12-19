
class Abcalc {
  constructor(numsArray) {
    this.numsArray = numsArray;
    this.min  = 0;
    this.max  = 0;
    this.prod = 0;
    this.avg  = 0;
    this.calcMin();
    this.calcMax();
    this.calcProd();
    this.calcAvg();
  }

  calcMin() {
    var min;
    var arrayLength = this.numsArray.length;
    for (var i = 0; i < arrayLength; i++) {
      if (min === undefined) {
        min = this.numsArray[i];
      } else {
        if (this.numsArray[i] < min) {
          min = this.numsArray[i];
        }
      }
    }
    this.min = min;
  }

  calcMax() {
    var max;
    var arrayLength = this.numsArray.length;
    for (var i = 0; i < arrayLength; i++) {
      if (max === undefined) {
        max = this.numsArray[i];
      } else {
        if (this.numsArray[i] > max) {
          max = this.numsArray[i];
        }
      }
    }
    this.max = max;
  }

  calcProd() {
    var prod;
    var arrayLength = this.numsArray.length;
    for (var i = 0; i < arrayLength; i++) {
      if (prod === undefined) {
        prod = this.numsArray[i];
      } else {
        prod *= this.numsArray[i];
      }
    }
    this.prod = prod;
  }

  calcAvg() {
    var sum = 0;
    var arrayLength = this.numsArray.length;
    for (var i = 0; i < arrayLength; i++) {
      sum += parseInt(this.numsArray[i], 10);
    }
    this.avg = sum / arrayLength;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#calculate").addEventListener("click", function () {
    var numbers = document.querySelector("#numbers").value.split(',').map(Number);
    var abcalc = new Abcalc(numbers)
    var avg  = abcalc.avg;
    var prod = abcalc.prod;
    var min  = abcalc.min;
    var max  = abcalc.max;
    var result = `<br>Min: ${min}<br>Max: ${max}<br>Prod: ${prod}<br>Avg: ${avg}`;
    document.querySelector("div").innerHTML = result;
  });
});
