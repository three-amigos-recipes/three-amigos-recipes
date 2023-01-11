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
    getRandom(Math.floor((Math.random()) * 152000));
});

// API Call
function getRandom(id) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '26178cbbd9msha16f9517382f54ap17b857jsn1d58db5175dd',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };


    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/' + id + '/information', options)
        // Checks the response
        .then(response => response.json())
        // Creates elements for the response title, image, readyInMinutes and sourceUrl
        .then(response => {
            var title = document.createElement('div')
            title.textContent = 'Title: ' + response.title

            var img = document.createElement('img')
            img.setAttribute('src', response.image)

            var time = document.createElement('div')
            time.textContent = 'Cook time: ' + response.readyInMinutes + ' minutes!'

            var url = document.createElement('a')
            url.setAttribute('href', response.sourceUrl)
            url.textContent = response.title

            // Appends the elements created 
            document.querySelector('.card').append(title, img, time, url)
        })
        .catch(err => console.error(err));
};






