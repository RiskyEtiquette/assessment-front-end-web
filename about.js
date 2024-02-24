console.log("hello world");

function handleSubmit(evt) {
    evt.preventDefault();
    alert('Form submitted successfully!');
}

function giveCompliment() {
    alert('You have a great taste in pictures!');
}

let form = document.querySelector('#contact');
let picture = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover', giveCompliment);
