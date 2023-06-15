"use strict";

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
    let min;
    const arrayLength = this.numsArray.length;
    for (let i = 0; i < arrayLength; i++) {
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
    let max;
    const arrayLength = this.numsArray.length;
    for (let i = 0; i < arrayLength; i++) {
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
    let prod;
    const arrayLength = this.numsArray.length;
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
    let sum = 0;
    const arrayLength = this.numsArray.length;
    for (let i = 0; i < arrayLength; i++) {
      sum += parseInt(this.numsArray[i], 10);
    }
    this.avg = sum / arrayLength;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#calculate").addEventListener("click", () => {
    const numbers = document.querySelector("#numbers").value.split(',').map(Number);
    const abcalc = new Abcalc(numbers);
    const avg  = abcalc.avg;
    const prod = abcalc.prod;
    const min  = abcalc.min;
    const max  = abcalc.max;
    const result = `<br>Min: ${min}<br>Max: ${max}<br>Prod: ${prod}<br>Avg: ${avg}`;
    document.querySelector("div").innerHTML = result;
  });
});
