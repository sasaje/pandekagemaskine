console.log("javascript loaded!");

/* set <input type="range" element from html to variable */
/* sets eventListener to the range slider, which calls function calculateIngrediens */
var elRange = document.getElementById('numberofpersons');
elRange.addEventListener('change', calculateIngrediens, false);

function calculateIngrediens(){
    console.log("calculateIngrediens() called!");

    var numberofpersons = $("output").val();
    console.log("Number of persons: " + numberofpersons);

    var egg = (1*numberofpersons);
    $('input:eq(1)').val(egg);

    var flour = (1*numberofpersons).toFixed(2);
    $('input:eq(2)').val(flour);

    var milk = (1.5*numberofpersons).toFixed(2);
    $('input:eq(3)').val(milk);

    var salt = (1.5*numberofpersons).toFixed(2);
    $('input:eq(4)').val(salt);

    var vanilla = (2*numberofpersons).toFixed(2);
    $('input:eq(5)').val(vanilla);
}