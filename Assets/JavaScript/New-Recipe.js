// Navbar Hamburger Button
$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $('.navbar-burger').click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $('.navbar-burger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');

    });
});



$('#random-recipe-btn').click(function () {
    getRandom(Math.floor((Math.random()) * 750000));
    // getRandom(642306)
});

// API Call
function getRandom(id) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '46bd054f8cmsh16bbe6b909a599dp11e469jsnb89084f34eb0',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    // Clears the previous recipe before displaying the new one
    document.querySelector('.card').innerHTML = '';

    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/' + id + '/information', options)
        // Checks the response
        .then(response => response.json())
        .then(function (response) {
            // Runs the getRandom function again if the id isnt valid
            if (response.status) {
                getRandom(Math.floor((Math.random()) * 750000));
            } else {
                // Creates elements for the response title, image, readyInMinutes and sourceUrl if the recipe page has a valid id
                var title = document.createElement('h2');
                title.textContent = response.title;
                title.id = 'title';
                // Displays only functional image types
                if (response.imageType === 'jpeg', 'jpg', 'png') {
                    var img = document.createElement('img');
                    img.setAttribute('src', response.image);
                    // Does not display any other image type
                } else {

                };
                var time = document.createElement('div');
                time.textContent = 'Cook time: ' + response.readyInMinutes + ' minutes!';
                time.id = 'time';
                // Tells user to click the link for instructions if there are no instructions to display
                if (!response.instructions) {
                    var instructions = document.createElement('p');
                    instructions.textContent = 'Click link for instructions';
                    instructions.id = 'instructions';
                    // Displays the instructions
                } else {
                    var instructions = document.createElement('p');
                    instructions.textContent = 'Instructions: ' + response.instructions;
                    instructions.id = 'instructions';
                };
                var url = document.createElement('a');
                url.setAttribute('href', response.sourceUrl);
                url.textContent = response.title;
                url.id = 'url';
                // Appends the elements created 
                document.querySelector('.card').append(title, img, instructions, time, url);

                // Adds the recipe to the local storage
                url.addEventListener('click', function () {
                    localStorage.setItem('clickedLink', this.getAttribute('href'));
                });
                let existingRecipes = JSON.parse(localStorage.getItem('recipes'));
                if (!existingRecipes) {
                    existingRecipes = [];
                }
                existingRecipes.push({ 'title': response.title, 'image': response.image, 'instructions': response.instructions, 'sourceUrl': response.sourceUrl });
                localStorage.setItem('recipes', JSON.stringify(existingRecipes));


            };
        })
        .catch(err => console.error(err));
    return;
};
