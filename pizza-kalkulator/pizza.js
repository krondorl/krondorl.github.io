document.addEventListener("DOMContentLoaded", function() {
  // Diameter in cm
  calcPizza = (price, diameter) => {
    return (price / ((Math.pow((diameter), 2) * Math.PI) / 4));
  }

  document.querySelector(".button-reset").addEventListener("click", function (e) {
    e.preventDefault();
    let inputs = Array.from(document.querySelectorAll("input[type=text]"));
    for (input of inputs) {
      input.setAttribute('value', '');
    }
  });

  document.querySelector(".button-calculate").addEventListener("click", function (e) {
    e.preventDefault();
    let data   = [];
    let inputs = Array.from(document.querySelectorAll("input[type=text]"));
    for (input of inputs) {
      let rawName      = input.name;
      let name         = rawName.split('--');
      let key          = name[0];
      let value        = input.value;
      let index        = name[1];
      data.push({ index, key, value });
    }
    console.log(data);
  });
});
