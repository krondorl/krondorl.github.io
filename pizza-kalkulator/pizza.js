document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".button-reset").addEventListener("click", function () {
    let inputs = Array.from(document.querySelectorAll("input[type=text]"));
    for (input of inputs) {
      input.setAttribute('value', '');
    }
  });
  document.querySelector(".button-calculate").addEventListener("click", function () {
    let inputs = Array.from(document.querySelectorAll("input[type=text]"));
    for (input of inputs) {
    }
  });
});
