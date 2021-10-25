// Selecting all div elements with the class of square
const  square = document.querySelectorAll('.square')
// Selecting all div elements with the class of mole
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let curretTime = timeLeft.textContent
 
function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')


    // assign the id of the radnomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole() {
    let timerId = null 
    timerId = setInterval(randomSquare, 1000)
}

function countDown() {
    curretTime--
    timeLeft.textContent = curretTime

    if(curretTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let timerId = setInterval(countDown, 1000)

moveMole()