document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#run").addEventListener("click", function () {
    var items = document.querySelector("#quantity").value;
    var out = fibo(items);
    document.querySelector("#output").value = out.join(",");
  });
});

function fibo(items) {
  var fibonumbers = [1,1];

  for (i = 2; i <= (items - 1); i++) {
    var prev2 = fibonumbers[i-2];
    var prev  = fibonumbers[i-1];
    var sum   = prev2 + prev;
    fibonumbers.push(sum);
  }

  return fibonumbers;
}
