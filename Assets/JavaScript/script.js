var ingredientList = [];

$('.add-ingredient-btn').click(function (event) {
    event.preventDefault();

    var inputText = $('.ingredient-input').val();
    console.log(inputText);
    ingredientList.push(inputText);
    console.log(ingredientList);
});

if (ingredientList) {
    for (var i = 0; i < ingredientList; i++) {
        var ingredient = ingredientList[i];
        console.log(ingredient);
        $('.ingredient-list').append('<li>' + ingredient + '</li>');
    }
    
}


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '46bd054f8cmsh16bbe6b909a599dp11e469jsnb89084f34eb0',
// 		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
// 	}
// };



// fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=onion%2Ccelery%2Cchicken&number=5&ignorePantry=true&ranking=1', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));