How it works:

For sake of brevity I won't go into great detail, but just about
every line in the app.js file is explained with at least one or
two in line comments. Fundamentally this project uses and array
of objects and a for loop inside the createBoard() function to 
initially populate and set the grid up for a new game. The 
flipCard() function is used as the call back function in 
each eventListener initially attached to each sqaure(card)
in the grid. The checkForMatch() function does as implied and
fundamentally uses three arrays to check for cards chosen
not unique(cardsChosen) cards chosen unique(cardsChosedId)
and cards mathces found(cardsWon).

What I learned:

Using setAttribute(), getAttibute and querySelectorAll() functions.
Using the textContent property in app.js to  access and 
change span elements in HTML. Using the createElement()
function to create img elements and us  appendChild()
function to append the newly created element to the 
div element with class .grid
