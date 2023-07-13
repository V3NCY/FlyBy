// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}


//auto hide flyby video pause content
$(window).scroll(function () {

    if ($(this).scrollTop() > 0) {
        $('.content').fadeOut();
    }
    else {
        $('.content').fadeIn();
    }
});
////animation

//var myArray = ['.navbar-brand'];
//var n = 1;
//setInterval(function () {
//    $(".flip").html(myArray[n]);
//    if (myArray.length - 1 == n) {
//        n = 0;
//    } else {
//        n++;
//    }
//}, 3000);

//$(window).scroll(function () {
//    if ($(document).scrollTop() > 550) {
//        $('nav').addClass('shrink');
//    } else {
//        $('nav').removeClass('shrink');
//    }
//});

//translation

var arrLang = {
    "en": {
        "HOME": "Home",
        "Flights": "Flights",
        "Flight Radar": "Flight Radar",
        "About": "About",
        "Support": "Support",
    },
    "bg": {
        "HOME": "Начало",
        "Flights": "Полети",
        "Flight Radar": "Самолетен радар",
        "About": "За нас",
        "Support": "Поддръжка",
    },
    "de": {
        "HOME": "Heim",
        "Flights": "Fluge",
        "Flight Radar": "Flugradar",
        "About": "Uber uns",
        "Support": "Unterstutzung",
    },
    "fr": {
        "HOME": "Maison",
        "Flights": "Vols",
        "Flight Radar": "Radar de vol",
        "About": "A propos de nous",
        "Support": "Soutien",
    }
};

$(document).ready(function () {
    // The default language is English
    var lang = "en";
    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});

// get/set the selected language
$(".translate").click(function () {
    var lang = $(this).attr("id");

    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});

//
