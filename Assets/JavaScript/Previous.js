var recipeContainerEl = document.querySelector('#recipeContainer')

$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});

// let storedRecipes = localStorage.getItem('recipes');
// let existingRecipes = storedRecipes ? JSON.parse(storedRecipes) : [];

// // Number of recipes to display at a time
// let numOfRecipes = 5;

// //Starting index of recipes array
// let startingIndex = 0;

// // Gets the recipe container
// let recipeContainerEl = document.getElementById('#recipe-container');

// // Get the 'click for more' button
// let moreBtn = document.getElementById('#more-btn');

// moreBtn.style.display = 'none';


// function displayRecipes() {
//     let displayedRecipes = existingRecipes.slice(startingIndex, startingIndex + numOfRecipes);

//     // Clears the recipe container
//     recipeContainerEl.innerHTML = '';

//     displayedRecipes.forEach(function (recipe) {
//         // display the recipe information, for example by creating and appending elements to the DOM.
//         let recipeEl = document.createElement('a');
//         recipeEl.setAttribute('href', recipe.sourceUrl);

//         let recipeBox = document.createElement('div');
//         recipeBox.classList = 'recipe-container';

//         let recipeTitle = document.createElement('h2');
//         recipeTitle.innerText = recipe.title;
//         recipeTitle.id = 'title';
//         recipeTitle.classList = 'card-header-title is-centered';

//         let recipeImg = document.createElement('img');
//         recipeImg.setAttribute('src', recipe.image);
//         recipeImg.id = 'picture';

//         recipeBox.append(recipeTitle, recipeImg);
//         recipeEl.appendChild(recipeBox);

//         recipeContainerEl.appendChild(recipeEl);
//     });

//     // Checks if there are more recipes to display
//     if(startingIndex + numOfRecipes >= existingRecipes.length) {
//         moreBtn.style = 'display: none';
//     }
// }

// displayRecipes();

// moreBtn.addEventListener('click', function() {
//     startingIndex += numOfRecipes;
//     displayRecipes();
// });


// See about displaying a certain amount and adding a display more option?



let storedRecipes = localStorage.getItem('recipes');
let existingRecipes = storedRecipes ? JSON.parse(storedRecipes) : [];

// Number of recipes to be displayed at a time
let numberOfRecipesToDisplay = 10;

// Starting index of the recipes array
let startingIndex = 0;

// Get the recipe container element
let recipeContainer = document.querySelector("#recipe-container");

// Get the 'click for more' button
let moreButton = document.querySelector("#more-button");

function displayRecipes(){
    // Get the subset of recipes to be displayed
    let displayedRecipes = existingRecipes.slice(startingIndex, startingIndex + numberOfRecipesToDisplay);

    // Clear the recipe container
    recipeContainer.innerHTML = "";

    // Loop through the displayed recipes
    displayedRecipes.forEach(function (recipe) {
    // display the recipe information, for example by creating and appending elements to the DOM.
    let recipeEl = document.createElement('a');
    recipeEl.setAttribute('href', recipe.sourceUrl);
    
    let recipeBox = document.createElement('div');
    recipeBox.classList = 'recipe-container';

    let recipeTitle = document.createElement('h2');
    recipeTitle.innerText = recipe.title;
    recipeTitle.id = 'title';
    recipeTitle.classList = 'card-header-title is-centered';

    let recipeImg = document.createElement('img');
    recipeImg.setAttribute('src', recipe.image);
    recipeImg.id = 'picture';
    
    recipeBox.append(recipeTitle, recipeImg);
    recipeEl.appendChild(recipeBox);

    recipeContainer.appendChild(recipeEl);
    });
    // check if there are more recipes to display
    if(startingIndex + numberOfRecipesToDisplay >= existingRecipes.length) {
        moreButton.style.display = "none";
    }
}

displayRecipes();

moreButton.addEventListener("click", function(){
    startingIndex += numberOfRecipesToDisplay;
    displayRecipes();
});
