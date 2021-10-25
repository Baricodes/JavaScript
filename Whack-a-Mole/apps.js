// Selecting all div elements with the class of square
const  square = document.querySelectorAll('.square')
// Selecting all div elements with the class of mole
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

// Players score
let result = 0
// Game clock
let curretTime = timeLeft.textContent
 
// Function for randomly placing the mole around in the grid
function randomSquare() {
    // Using for each function to clear the board
    square.forEach(className => {
        className.classList.remove('mole')
    })
    // Using to select a random position on the grid
    let randomPosition = square[Math.floor(Math.random() * 9)]
    // Adding the mole to the square
    randomPosition.classList.add('mole')


    // Assign the id of the radnomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
}

// A for each function to set up the scoring system
square.forEach(id => {
    // Adding an event listner to each square
    id.addEventListener('mouseup', () => {
        // If current square is equal to hit position
        // Add 1 to the score and update the score
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result
        }
    })
})

// Function for moving the mole around the grid
function moveMole() {
    let timerId = null 
    // Setting a time interval up for delayed calls to randomSquare()
    // which places the mole around the grid
    timerId = setInterval(randomSquare, 800)
}

// Function for decrementing game clock
function countDown() {
    curretTime--
    timeLeft.textContent = curretTime

    if(curretTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}
// Interval for game clock count down
let timerId = setInterval(countDown, 1000)

moveMole()