
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
    // If the input box is blank it will write an error message to the screen informing the user that they need to fill out the search box
    if (inputText === '') {
        var errorMsg = document.createElement('div');
        errorMsg.textContent = "Please Enter a Valid Ingredient";
        errorMsg.style = "background-color: transparent; color: red;"
        document.querySelector('.ingredients-display').append(errorMsg);
        setTimeout(function () {
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

        // If an ingredient has been added to the page, generate a find a recipe button
        if (!ingredientAdded) {
            var recipeSearchBtn = document.createElement('button');
            recipeSearchBtn.textContent = 'Find a Recipe!';
            recipeSearchBtn.id = 'recipe-search-btn';
            recipeSearchBtn.className = 'results-btn';
            document.querySelector('.results-btns').append(recipeSearchBtn);

            // If the find a recipe button is clicked, show the results
            $('#recipe-search-btn').click(function (event) {
                event.preventDefault();
                // Array is converted to string for injecting into API call
                var ingredientsList = ingredientListArray.join(",");

                document.querySelector('.results-display').innerHTML = '';
                getRecipeIds(ingredientsList);
                resultsDisplayed = true;

                // If statement to see if there are results currently displayed on the page
                // If true, create the clear results button
                if (resultsDisplayed) {
                    var clearRecipesBtn = document.createElement('button');
                    clearRecipesBtn.textContent = 'Clear Results';
                    clearRecipesBtn.id = 'clear-results-btn';
                    clearRecipesBtn.className = 'results-btn';

                    if (!document.getElementById('clear-results-btn')) {
                        document.querySelector('.results-btns').append(clearRecipesBtn);
                    }
                    
                    // If the clear results button is clicked, clear the page of the results
                    $('#clear-results-btn').click(function (event) {
                        event.preventDefault();

                        document.querySelector('.results-display').innerHTML = '';
                        document.querySelector('.ingredients-display').innerHTML = '';
                        if (document.getElementById('recipe-search-btn')) {
                            document.getElementById('recipe-search-btn').remove();
                        }
                        if (document.getElementById('clear-results-btn')) {
                            document.getElementById('clear-results-btn').remove();
                        }
                        ingredientAdded = false;
                        ingredientListArray = [];
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

    // Console logs for testing purposes
    // console.log(editedTargetText);
    // console.log(ingredientListArray);

    // Code that removes the individually clicked on Div
    individualDiv.remove();

    if (!document.querySelector('.ingredientTag')) {
        document.getElementById('recipe-search-btn').remove();
        ingredientAdded = false;

        document.querySelector('.results-display').innerHTML = '';
        document.querySelector('.ingredients-display').innerHTML = '';
        if (document.getElementById('recipe-search-btn')) {
            document.getElementById('recipe-search-btn').remove();
        }
        if (document.getElementById('clear-results-btn')) {
            document.getElementById('clear-results-btn').remove();
        }
        ingredientAdded = false;
        ingredientListArray = [];
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
            // For loop for creating an array that contains the recipe results IDs
            for (var i = 0; i < data.length; i++) {
                recipeIds.push(data[i].id);
            }
            // For loop that calls the getRecipeInfo function for each index in the array
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
        .then(function (response) {

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

            var urlDiv = document.createElement('div');
            urlDiv.id = 'url-div';

            var url = document.createElement('a');
            url.setAttribute('href', response.sourceUrl);
            url.textContent = response.title;
            url.id = 'url';
            // Appends the elements created 
            document.querySelector('.results-display').append(title, img, time, urlDiv);
            urlDiv.append(url);

            // Adds the recipe to the local storage
            url.addEventListener('click', function () {
                let href = this.getAttribute('href');
                if (href === response.sourceUrl) {
                    let existingRecipes = JSON.parse(localStorage.getItem('recipes'));
                    if (!existingRecipes) {
                        existingRecipes = [];
                    }
                    existingRecipes.push({ 'title': response.title, 'image': response.image, 'instructions': response.instructions, 'sourceUrl': response.sourceUrl });
                    localStorage.setItem('recipes', JSON.stringify(existingRecipes));
                }
            });

        })
        .catch(err => console.error(err));
}
