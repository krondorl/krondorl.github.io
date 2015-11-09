$(document).ready(function () {
  $("#run").on("click", function () {
    var items = $("#quantity").val();
    var out = fibo(items);
    $("#output").val(out.join(","));
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
