
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
let resultsDisplayed = false;

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
            recipeSearchBtn.className = 'results-btn';
            document.querySelector('.results-btns').append(recipeSearchBtn);

            $('#recipe-search-btn').click(function(event) {
                event.preventDefault();
                // Array is converted to string for injecting into API call
                var ingredientsList = ingredientListArray.join(",");

                getRecipeIds(ingredientsList);
                resultsDisplayed = true;

                if (resultsDisplayed) {
                    var clearRecipesBtn = document.createElement('button');
                    clearRecipesBtn.textContent = 'Clear Results';
                    clearRecipesBtn.id = 'clear-results-btn';
                    clearRecipesBtn.className = 'results-btn';
                    document.querySelector('.results-btns').append(clearRecipesBtn);

                    $('#clear-results-btn').click(function(event) {
                        event.preventDefault();

                        document.querySelector('.results-display').innerHTML = '';
                    })
                }
            });

            ingredientAdded = true;
        }

        
        return ingredientsList;
    }
    
});



// Remove ingredients when X is clicked
$('.ingredients-display').click(function (event) {
    event.preventDefault();
    // Identifies the unique div that has been clicked on
    var individualDiv = event.target;
    
    // The following two lines get the text content of the div that was clicked on.
    // Then filters out the "    X" at the end of the string.
    targetText = event.target.textContent;
    editedTargetText = targetText.split('\xa0')[0];

    // This code will remove the clicked on div's text content from the array of ingredients
    let valueIndex = ingredientListArray.indexOf(editedTargetText);
    if (valueIndex !== -1) {
        ingredientListArray.splice(valueIndex, 1);
    }

    console.log(editedTargetText);
    console.log(ingredientListArray);
    
    individualDiv.remove();

    if (!document.querySelector('.ingredientTag')) {
        document.getElementById('recipe-search-btn').remove();
        ingredientAdded = false;
    }
})


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
            for (var j = 0; j < recipeIds.length; j++) {
                getRecipeInfo(recipeIds[j]);
            }
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
	.then(function(response) {

        // Creates elements for the response title, image, readyInMinutes and sourceUrl if the recipe page has a valid id
        var title = document.createElement('div');
        title.textContent = response.title;
        title.id = 'title';

        var img = document.createElement('img');
        img.setAttribute('src', response.image);
        img.id = 'image';

        var time = document.createElement('div');
        time.textContent = 'Cook time: ' + response.readyInMinutes + ' minutes!';
        time.id = 'time';

        var url = document.createElement('a');
        url.setAttribute('href', response.sourceUrl);
        url.textContent = response.title;
        url.id = 'url';
        // Appends the elements created 
        document.querySelector('.results-display').append(title, img, time, url);
    
    })
	.catch(err => console.error(err));
}
