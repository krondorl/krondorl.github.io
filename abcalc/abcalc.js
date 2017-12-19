var abcalc = {
  min: function(input) {
    var min;
    var arrayLength = input.length;
    for (var i = 0; i < arrayLength; i++) {
      if (min === undefined) {
        min = input[i];
      } else {
        if (input[i] < min) {
          min = input[i];
        }
      }
    }
    return min;
  },
  max: function(input) {
    var max;
    var arrayLength = input.length;
    for (var i = 0; i < arrayLength; i++) {
      if (max === undefined) {
        max = input[i];
      } else {
        if (input[i] > max) {
          max = input[i];
        }
      }
    }
    return max;
  },
  prod: function(input) {
    var prod;
    var arrayLength = input.length;
    for (var i = 0; i < arrayLength; i++) {
      if (prod === undefined) {
        prod = input[i];
      } else {
        prod *= input[i];
      }
    }
    return prod;
  },
  avg: function(input) {
    var sum = 0;
    var arrayLength = input.length;
    for (var i = 0; i < arrayLength; i++) {
      sum += parseInt(input[i], 10);
    }
    return sum / arrayLength;
  }
};

$(document).ready(function () {
  $("#calculate").on("click", function () {
    var numbers = $("#numbers").val().split(',').map(Number);
    var avg = abcalc.avg(numbers);
    var prod = abcalc.prod(numbers);
    var min = abcalc.min(numbers);
    var max = abcalc.max(numbers);
    $("div").html("<br>Min: " + min + "<br> Max: " + max + "<br>Prod: " + prod + "<br>Avg: " + avg);
  });
});
