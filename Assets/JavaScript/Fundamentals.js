$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});

$('.basics-btn').click(function() {
    $('.sidebar ul .basics-show').toggleClass('show');
    $('.sidebar ul .first').toggleClass('rotate');
});

$('.prepare-btn').click(function() {
    $('.sidebar ul .prepare-show').toggleClass('show1');
    $('.sidebar ul .second').toggleClass('rotate');
});

$('.diet-btn').click(function() {
    $('.sidebar ul .diet-show').toggleClass('show2');
    $('.sidebar ul .third').toggleClass('rotate');
});

$('.sidebar ul li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
});

$('.btn').click(function() {
    $(this).toggleClass('click');
    $('.sidebar').toggleClass('show');
});


var sidebar = document.querySelector('.sidebar')

var utensil = document.querySelector('.utensil');
var utensilVideo = document.querySelector('.utensilVideo');
var etiquette = document.querySelector('.etiquette');
var etiquetteVideo = document.querySelector('.etiquetteVideo');
var beef = document.querySelector('.beef');
var beefVideo = document.querySelector('.beefVideo');
var chicken = document.querySelector('.chicken');
var chickenVideo = document.querySelector('.chickenVideo');
var pork = document.querySelector('.pork');
var porkVideo = document.querySelector('.porkVideo');
var veggie = document.querySelector('.veggie');
var vegVideo = document.querySelector('.vegVideo');
var keto = document.querySelector('.keto');
var ketoVideo = document.querySelector('.ketoVideo');
var atkins = document.querySelector('.atkins');
var atkinsVideo = document.querySelector('.atkinsVideo');
var vegetarian = document.querySelector('.vegetarian');
var vegetarianVideo = document.querySelector('.vegetarianVideo');
var gluten = document.querySelector('.gluten');
var glutenVideo = document.querySelector('.glutenVideo');
var knifeSharpening = document.querySelector('.knifeSharpening');
var knifeSharpeningVideo = document.querySelector('.knifeSharpeningVideo');
var cuttingTechniques = document.querySelector('.cuttingTechniques');
var cuttingTechniquesVideo = document.querySelector('.cuttingTechniquesVideo');


utensilVideo.style = 'display: none;';
etiquetteVideo.style = 'display: none;';
beefVideo.style = 'display: none;';
chickenVideo.style = 'display: none;';
porkVideo.style = 'display: none;';
vegVideo.style = 'display: none;';
ketoVideo.style = 'display: none;';
atkinsVideo.style = 'display: none;';
vegetarianVideo.style = 'display: none;';
glutenVideo.style = 'display: none;';
knifeSharpeningVideo.style = 'display: none';
cuttingTechniquesVideo.style = 'display: none';

cuttingTechniques.addEventListener('click', function() {
    cuttingTechniquesVideo.style = 'display: block;'
    knifeSharpeningVideo.style = 'display: none;'
    utensilVideo.style = 'display: none;'
    etiquetteVideo.style = 'display: none;'
    beefVideo.style = 'display: none;'
    chickenVideo.style = 'display: none;'
    porkVideo.style = 'display: none;'
    vegVideo.style = 'display: none;'
    ketoVideo.style = 'display: none;'
    vegetarianVideo.style = 'display: none;'
    atkinsVideo.style = 'display: none;'
    glutenVideo.style = 'display: none;'

    $('.btn').toggleClass('click');
    $('.sidebar').toggleClass('show');
})


knifeSharpening.addEventListener('click', function () {
    knifeSharpeningVideo.style = 'display: block;'
    cuttingTechniquesVideo.style = 'display: none;'
    utensilVideo.style = 'display: none;'
    etiquetteVideo.style = 'display: none;'
    beefVideo.style = 'display: none;'
    chickenVideo.style = 'display: none;'
    porkVideo.style = 'display: none;'
    vegVideo.style = 'display: none;'
    ketoVideo.style = 'display: none;'
    vegetarianVideo.style = 'display: none;'
    atkinsVideo.style = 'display: none;'
    glutenVideo.style = 'display: none;'

    $('.btn').toggleClass('click');
    $('.sidebar').toggleClass('show');
})

utensil.addEventListener('click', function () {
    utensilVideo.style = 'display: block;'
    etiquetteVideo.style = 'display: none;'
    beefVideo.style = 'display: none;'
    chickenVideo.style = 'display: none;'
    porkVideo.style = 'display: none;'
    vegVideo.style = 'display: none;'
    ketoVideo.style = 'display: none;'
    vegetarianVideo.style = 'display: none;'
    atkinsVideo.style = 'display: none;'
    glutenVideo.style = 'display: none;'
    cuttingTechniquesVideo.style = 'display: none;'
    knifeSharpeningVideo.style = 'display: none;'

    $('.btn').toggleClass('click');
    $('.sidebar').toggleClass('show');
});
etiquette.addEventListener('click', function () {
    etiquetteVideo.style = 'display: block;'
    utensilVideo.style = 'display: none;'
    beefVideo.style = 'display: none;'
    chickenVideo.style = 'display: none;'
    porkVideo.style = 'display: none;'
    vegVideo.style = 'display: none;'
    ketoVideo.style = 'display: none;'
    vegetarianVideo.style = 'display: none;'
    atkinsVideo.style = 'display: none;'
    glutenVideo.style = 'display: none;'
    cuttingTechniquesVideo.style = 'display: none;'
    knifeSharpeningVideo.style = 'display: none;'

    $('.btn').toggleClass('click');
    $('.sidebar').toggleClass('show');
});

beef.addEventListener('click', function () {
    beefVideo.style = 'display: block;'
    utensilVideo.style = 'display: none;'
    etiquetteVideo.style = 'display: none;'
    chickenVideo.style = 'display: none;'
    porkVideo.style = 'display: none;'
    vegVideo.style = 'display: none;'
    ketoVideo.style = 'display: none;'
    vegetarianVideo.style = 'display: none;'
    atkinsVideo.style = 'display: none;'
    glutenVideo.style = 'display: none;'
    cuttingTechniquesVideo.style = 'display: none;'
    knifeSharpeningVideo.style = 'display: none;'

    $('.btn').toggleClass('click');
    $('.sidebar').toggleClass('show');
});

chicken.addEventListener('click', function () {
    chickenVideo.style = 'display: block;'
    utensilVideo.style = 'display: none;'
    etiquetteVideo.style = 'display: none;'
    beefVideo.style = 'display: none;'
    porkVideo.style = 'display: none;'
    vegVideo.style = 'display: none;'
    ketoVideo.style = 'display: none;'
    vegetarianVideo.style = 'display: none;'
    atkinsVideo.style = 'display: none;'
    glutenVideo.style = 'display: none;'
    cuttingTechniquesVideo.style = 'display: none;'
    knifeSharpeningVideo.style = 'display: none;'

    $('.btn').toggleClass('click');
    $('.sidebar').toggleClass('show');
});

pork.addEventListener('click', function () {
    porkVideo.style = 'display: block;'
    utensilVideo.style = 'display: none;'
    etiquetteVideo.style = 'display: none;'
    beefVideo.style = 'display: none;'
    chickenVideo.style = 'display: none;'
    vegVideo.style = 'display: none;'
    ketoVideo.style = 'display: none;'
    vegetarianVideo.style = 'display: none;'
    atkinsVideo.style = 'display: none;'
    glutenVideo.style = 'display: none;'
    cuttingTechniquesVideo.style = 'display: none;'
    knifeSharpeningVideo.style = 'display: none;'

    $('.btn').toggleClass('click');
    $('.sidebar').toggleClass('show');
});

veggie.addEventListener('click', function () {
    vegVideo.style = 'display: block;'
    utensilVideo.style = 'display: none;'
    etiquetteVideo.style = 'display: none;'
    beefVideo.style = 'display: none;'
    chickenVideo.style = 'display: none;'
    porkVideo.style = 'display: none;'
    ketoVideo.style = 'display: none;'
    vegetarianVideo.style = 'display: none;'
    atkinsVideo.style = 'display: none;'
    glutenVideo.style = 'display: none;'
    cuttingTechniquesVideo.style = 'display: none;'
    knifeSharpeningVideo.style = 'display: none;'

    $('.btn').toggleClass('click');
    $('.sidebar').toggleClass('show');
});

keto.addEventListener('click', function () {
    ketoVideo.style = 'display: block;'
    utensilVideo.style = 'display: none;'
    etiquetteVideo.style = 'display: none;'
    beefVideo.style = 'display: none;'
    chickenVideo.style = 'display: none;'
    porkVideo.style = 'display: none;'
    vegVideo.style = 'display: none;'
    vegetarianVideo.style = 'display: none;'
    atkinsVideo.style = 'display: none;'
    glutenVideo.style = 'display: none;'
    cuttingTechniquesVideo.style = 'display: none;'
    knifeSharpeningVideo.style = 'display: none;'

    $('.btn').toggleClass('click');
    $('.sidebar').toggleClass('show');
});

vegetarian.addEventListener('click', function () {
    vegetarianVideo.style = 'display: block;'
    utensilVideo.style = 'display: none;'
    etiquetteVideo.style = 'display: none;'
    beefVideo.style = 'display: none;'
    chickenVideo.style = 'display: none;'
    porkVideo.style = 'display: none;'
    vegVideo.style = 'display: none;'
    ketoVideo.style = 'display: none;'
    atkinsVideo.style = 'display: none;'
    glutenVideo.style = 'display: none;'
    cuttingTechniquesVideo.style = 'display: none;'
    knifeSharpeningVideo.style = 'display: none;'

    $('.btn').toggleClass('click');
    $('.sidebar').toggleClass('show');
});

atkins.addEventListener('click', function () {
    atkinsVideo.style = 'display: block;'
    utensilVideo.style = 'display: none;'
    etiquetteVideo.style = 'display: none;'
    beefVideo.style = 'display: none;'
    chickenVideo.style = 'display: none;'
    porkVideo.style = 'display: none;'
    vegVideo.style = 'display: none;'
    ketoVideo.style = 'display: none;'
    vegetarianVideo.style = 'display: none;'
    glutenVideo.style = 'display: none;'
    cuttingTechniquesVideo.style = 'display: none;'
    knifeSharpeningVideo.style = 'display: none;'

    $('.btn').toggleClass('click');
    $('.sidebar').toggleClass('show');
});

gluten.addEventListener('click', function () {
    glutenVideo.style = 'display: block;'
    utensilVideo.style = 'display: none;'
    etiquetteVideo.style = 'display: none;'
    beefVideo.style = 'display: none;'
    chickenVideo.style = 'display: none;'
    porkVideo.style = 'display: none;'
    vegVideo.style = 'display: none;'
    ketoVideo.style = 'display: none;'
    vegetarianVideo.style = 'display: none;'
    atkinsVideo.style = 'display: none;'
    cuttingTechniquesVideo.style = 'display: none;'
    knifeSharpeningVideo.style = 'display: none;'

    $('.btn').toggleClass('click');
    $('.sidebar').toggleClass('show');
});