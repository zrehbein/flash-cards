// functions to be built

// get cards elements from html

const cards = document.querySelectorAll(".card")


// function to reveal hidden value for click listener
// can use 'this' to select the element being clicked
// toggle the 'flip' class defined in css
//couldnt get it to work as an arrow function, not sure why

function flipCard() {
    this.classList.toggle("flip")
}

//reset: randomize location of hidden values
// set up a shuffle function that will assign an Order property value to each card
// use mathfloor mathrandom to assign a value of 1-18 for each cards Order value
// by wrapping the function in parentheses plus two more at the end we can turn it into an Immediately Invoked Function expression
// an IIFE will run as soon as it is defined.  So on refresh, it will call itself.
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 18);
        card.style.order = randomPos;
    });
})();

// event listener to perform function "flip" on click

cards.forEach(card => card.addEventListener("click", flipCard))


//*remove correctly chosen cards from the board

//*add a point tracker function

//*add animation and sounds on click
