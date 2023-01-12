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
    // display the recipe information, for example by creating and appending elements to the DOM.
    let recipeTitle = document.createElement('h2');
    recipeTitle.innerText = recipe.title;
    recipeTitle.id = 'title'
    let recipeImg = document.createElement('img')
    recipeImg.setAttribute('src', recipe.image)
    recipeImg.id = 'i'
    let recipeUrl = document.createElement('a');
    recipeUrl.setAttribute('href', recipe.sourceUrl);
    recipeUrl.innerText = recipe.sourceUrl;
    recipeUrl.id = 'link'



    document.body.append(recipeTitle, recipeImg, recipeUrl);
});



// Stack the list in a column


// See about displaying a certain amount and adding a display more option?