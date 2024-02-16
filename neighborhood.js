document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the button
    const randomRestaurantButton = document.getElementById("randomRestaurant");

    // Restaurants array
    const restaurants = [
        "Wingers",
        "Applebee's",
        "Chilies"
        // Add more restaurants as needed
    ];

    // Function to generate a random restaurant recommendation
    function getRandomRestaurant() {
        // Get a random index within the range of the restaurants array
        const randomIndex = Math.floor(Math.random() * restaurants.length);
        // Get the restaurant at the random index
        const randomRestaurant = restaurants[randomIndex];
        // Alert the user with the random restaurant recommendation
        alert("You should try " + randomRestaurant + " tonight!");
    }

    // Add event listener to the button
    randomRestaurantButton.addEventListener("click", getRandomRestaurant);
});
