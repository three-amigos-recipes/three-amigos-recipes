var recipeContainerEl = document.querySelector('#recipeContainer')

$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});

let storedRecipes = localStorage.getItem('recipes');
let existingRecipes = storedRecipes ? JSON.parse(storedRecipes) : [];

existingRecipes.forEach(function (recipe) {
    let recipeBox = document.createElement('div');
    recipeBox.classList = 'recipe-container';

    // display the recipe information, for example by creating and appending elements to the DOM.
    let recipeEl = document.createElement('a');
    recipeEl.setAttribute('href', recipe.sourceUrl);
    recipeEl.classList = 'is-child'

    let recipeTitle = document.createElement('h2');
    recipeTitle.innerText = recipe.title;
    recipeTitle.id = 'title';
    recipeTitle.classList = 'card-header-title is-centered';

    let recipeImg = document.createElement('img');
    recipeImg.setAttribute('src', recipe.image);
    recipeImg.id = 'picture';

    recipeEl.append(recipeTitle, recipeImg);
    recipeBox.appendChild(recipeEl);

    recipeContainerEl.appendChild(recipeBox);
});



// Stack the list in a column


// See about displaying a certain amount and adding a display more option?