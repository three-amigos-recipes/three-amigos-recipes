$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});

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

utensil.addEventListener('click', function () {
    utensilVideo.style = 'display: block;'
});
etiquette.addEventListener('click', function () {
    etiquetteVideo.style = 'display: block;'
});
beef.addEventListener('click', function () {
    beefVideo.style = 'display: block;'
});
chicken.addEventListener('click', function () {
    chickenVideo.style = 'display: block;'
});
pork.addEventListener('click', function () {
    porkVideo.style = 'display: block;'
});
veggie.addEventListener('click', function () {
    vegVideo.style = 'display: block;'
});
keto.addEventListener('click', function () {
    ketoVideo.style = 'display: block;'
});
vegetarian.addEventListener('click', function () {
    vegetarianVideo.style = 'display: block;'
});
atkins.addEventListener('click', function () {
    atkinsVideo.style = 'display: block;'
});
gluten.addEventListener('click', function () {
    glutenVideo.style = 'display: block;'
});