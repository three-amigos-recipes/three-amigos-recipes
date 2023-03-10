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

let currentPage = 0;

let numberOfRecipesPerPage = 5;

function displayRecipes() {
    let recipesToDisplay = existingRecipes.slice(currentPage * numberOfRecipesPerPage, (currentPage + 1) * numberOfRecipesPerPage);

    recipeContainerEl.innerHTML = '';
    recipesToDisplay.forEach(function (recipe) {
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

        recipeContainerEl.appendChild(recipeEl);
    });
    checkButton();
};

let showMoreBtn = document.querySelector('#showMoreBtn');
showMoreBtn.addEventListener('click', function() {
    currentPage++;
    displayRecipes();
});

function checkButton() {
    if(currentPage >= Math.ceil(existingRecipes.length / numberOfRecipesPerPage) - 1) {
        showMoreBtn.style = 'display: none';
    } else {
        showMoreBtn.style = 'display: block';
    };
};

displayRecipes();