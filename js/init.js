$(document).ready(function() {
		

    var $srcValue = $('#imgHolder img').attr('src');

    var $carImg = $('#imgHolder img');


    $('#imgHolder img').on("click", function() {
        $(this).attr('src', "./images/auto1.png");
    });


    $('#colorSelector .colorItem.colorRed').on('click', function() {
        $('#imgHolder img').attr('src', './images/auto1.png')
    });

    $('#colorSelector .colorItem.colorGreen').on('click', function() {
        $('#imgHolder img').attr('src', './images/auto2.png')
    });

    $('#colorSelector .colorItem.colorWhite').on('click', function() {
        $('#imgHolder img').attr('src', './images/auto3.png')
    });

});
