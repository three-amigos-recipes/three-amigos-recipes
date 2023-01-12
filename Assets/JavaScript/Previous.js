$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});


// Forloop for persisting the data onto HMTL page
for (var i = 0; i < localStorage.length; i++) {

    var recipe = localStorage.getItem(i);
    // console.log(localStorage.getItem("recipe"));
    var recipeName = $(".list-group").addClass("list-group-item");

    recipeName.append("<li>" + recipe + "</li>");
}


// Stack the list in a column
// Make sure I am pull one item from local storage and displaying the next one
// Give each item an id so it can be styled

// See about displaying a certain amount and adding a display more option?