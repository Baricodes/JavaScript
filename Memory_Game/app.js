document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },    
    ]

    cardArray.sort(() => 0.5 - Math.random())

    // Selecting our HTML element with class grid
    // And representing it in our JavaScript as 'grid'
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    // Arrays for flipCard function
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // Function for creating our board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            // Creating an image element in our HTML
            // And representing it in our javaScript 
            // as 'card'
            var card = document.createElement('img')
            // Setting the card as blank
            card.setAttribute('src', 'images/blank.png')
            // Setting 'card' data-id attribute for
            // each card as the array iterates
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            // This will populate the div
            // element in our HTML file with 
            // each card which is technically
            // an image element
            grid.appendChild(card)
        }
    }


    // Check for matches function
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('You have clicked the same image!')
          }
          else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
          } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
          }
          cardsChosen = []
          cardsChosenId = []
          resultDisplay.textContent = cardsWon.length
          if  (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
          }
    }


    // Flip your card function
    function flipCard() {
        // Creating a variable 'cardId'
        // that represents the card's(<img>) data-id attribute
        var cardId = this.getAttribute('data-id')
        // Storing the name of the current card
        // into the cardsChoosen Array
        cardsChosen.push(cardArray[cardId].name)
        // Storing the Id of the current card
        cardsChosenId.push(cardId)
        // Setting the currnent cards src attribute to 
        // the appropriate image
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})