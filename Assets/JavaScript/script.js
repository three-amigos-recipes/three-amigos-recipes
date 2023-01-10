
// Navbar Hamburger Button
$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});




var ingredientList;

$('.add-ingredient-btn').click(function (event) {
    event.preventDefault();
    
    var inputText = $('.ingredient-input').val();
    console.log(inputText);
    ingredientList = inputText;
    return ingredientList;
});



// API CALL
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '46bd054f8cmsh16bbe6b909a599dp11e469jsnb89084f34eb0',
// 		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
// 	}
// };



// fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=' + ingredientList + '&number=5&ignorePantry=true&ranking=1', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



