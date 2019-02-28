"use strict";

$(document).ready(function() {

    var contents = $('#header').html();
    alert(contents);

    var contentsTwo = $('#p').html();
    alert(contentsTwo);

    $('.codeup').css('border', '1px solid red');

    $('.codeup').css('background-color', '#FFFF00')

    $('li').css('font-size', '20px');

    var contents = $('h1').html();
    alert(contents);

    $('h1').click(function() {
        $('h1').css('background-color', "red");
    });

    $('p').dblclick(function() {
        $(this).css('font-size', "18px");
    });

    function mouseOn() {
        $(this).css('color', "red");
    }

    function mouseOff() {
        $(this).css('color', "black");
    }

    $('li').hover(mouseOn, mouseOff);

});