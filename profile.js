// Get references to the buttons
const colorButton = document.getElementById("color");
const placeButton = document.getElementById("place");
const ritualButton = document.getElementById("ritual");

// Add event listeners to the buttons
colorButton.addEventListener("click", function() {
    alert("My favorite color is blue.");
});

placeButton.addEventListener("click", function() {
    alert("My favorite place is the beach.");
});

ritualButton.addEventListener("click", function() {
    alert("My favorite ritual is having a cup of coffee in the morning.");
});
