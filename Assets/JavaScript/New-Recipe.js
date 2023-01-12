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

            if (response.status) {
                getRandom(Math.floor((Math.random()) * 750000));
            } else {
                // Creates elements for the response title, image, readyInMinutes and sourceUrl if the recipe page has a valid id
                var title = document.createElement('div')
                title.textContent = response.title
                title.id = 'title'

                if (response.imageType === 'jpeg', 'jpg', 'png') {
                    var img = document.createElement('img')
                    img.setAttribute('src', response.image)
                } else {

                }

                var time = document.createElement('div')
                time.textContent = 'Cook time: ' + response.readyInMinutes + ' minutes!'
                time.id = 'time'

                if (!response.instructions) {
                    var instructions = document.createElement('div')
                    instructions.textContent = 'Click link for instructions'
                    instructions.id = 'instructions'
                } else {
                    var instructions = document.createElement('div')
                    instructions.textContent = 'Instructions: ' + response.instructions
                    instructions.id = 'instructions'
                }

                var url = document.createElement('a')
                url.setAttribute('href', response.sourceUrl)
                url.textContent = response.title
                url.id = 'url'
                // Appends the elements created 
                document.querySelector('.card').append(title, img, instructions, time, url)
            }
        })
        .catch(err => console.error(err));
    return;
};


// Add a clicked URL to local storage