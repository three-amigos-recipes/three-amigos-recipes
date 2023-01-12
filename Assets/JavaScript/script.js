
// Navbar Hamburger Button
$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});

var ingredientsList = '';
var ingredientListArray = [];
let counter = 0;
let ingredientAdded = false;


// Add ingredient to ingredients list
$('.add-ingredient-btn').click(function (event) {
    
    event.preventDefault();
    // Takes the value of the input box and adds it to a variable
    var inputText = $('.ingredient-input').val();
    console.log(inputText);
    if (inputText === '') {
        var errorMsg = document.createElement('div');
        errorMsg.textContent = "Please Enter a Valid Ingredient";
        errorMsg.style = "background-color: transparent; color: red;"
        document.querySelector('.ingredients-display').append(errorMsg);
        setTimeout(function() {
        errorMsg.remove();
        }, 2000);
    } else {
        // stores that value in an array
        ingredientListArray.push(inputText);
        // Array is converted to string for injecting into API call
        var ingredientsList = ingredientListArray.join(",");
        // Clears input field
        $('.ingredient-input').val("");
        // Creates div to display ingredient on webpage
        counter++;
        var ingredientName = document.createElement('div');
        ingredientName.className = 'ingredientTag';
        ingredientName.id = 'ingredientName' + counter;
        ingredientName.textContent = inputText + '\xa0\xa0\xa0\xa0\xa0' + "X";

        document.querySelector('.ingredients-display').append(ingredientName);

        if (!ingredientAdded) {
            var recipeSearchBtn = document.createElement('button');
            recipeSearchBtn.textContent = 'Find a Recipe!';
            recipeSearchBtn.id = 'recipe-search-btn';
            document.querySelector('.results').append(recipeSearchBtn);

            $('#recipe-search-btn').click(function(event) {
                event.preventDefault();
                
                console.log('test222');
            })

            ingredientAdded = true;
        }

        return ingredientsList;
    }
    
});



// Remove ingredients when X is clicked
$('.ingredients-display').click(function (event) {
    event.preventDefault();
    var individualDiv = event.target;
    // console.log(individualDiv);

    individualDiv.remove();

    if (!document.querySelector('.ingredientTag')) {
        document.getElementById('recipe-search-btn').remove();
        ingredientAdded = false;
    }
})

const buttonChecker = document.getElementById('#recipe-search-btn');




    




// API call function to search for recipes via ingredients and return recipe ids
function getRecipeIds(ingredient) {


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '46bd054f8cmsh16bbe6b909a599dp11e469jsnb89084f34eb0',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };



    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=' + ingredient + '&number=5&ignorePantry=true&ranking=1', options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var recipeIds = [];
            for (var i = 0; i < data.length; i++) {
                recipeIds.push(data[i].id);
            }
            console.log(recipeIds);
        })
        .catch(err => console.error(err));
}

// Function to get recipe information using the recipe ID(s)
function getRecipeInfo(ids) {
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46bd054f8cmsh16bbe6b909a599dp11e469jsnb89084f34eb0',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/' + ids + '/information', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
