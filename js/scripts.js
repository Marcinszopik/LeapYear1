const yearDivisible = function(year) {
    if ((year % 4 === 0) && (year % 400 === 0)) {
        return "Yes, that's a leap year!";
    } else {
        return "Nope, not a leap year.";
    }
}

$(document).ready(function() {
    $("form#leap-year").submit(function(event) {
      event.preventDefault();
      const year = parseInt($("input#year").val());
      const result = yearDivisible(year);
      $("#result").text(result);
    });
  });
  