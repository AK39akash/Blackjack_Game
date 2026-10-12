
let player = {
    name: "Akash",
    chips: 169,
}


let cards = []
let sum = 0

let hasBlackJack = false

let isAlive = false

let message = ""


let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")

let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



function getRandomCard() {
    let cardNumber = Math.floor(Math.random() * 13) + 1

    if (cardNumber > 10) return 10
    else if (cardNumber === 1) return 11
    else return cardNumber
}


function startGame() {

    isAlive = true
    let firstNumber = getRandomCard()
    let secondNumber = getRandomCard()
    cards = [firstNumber, secondNumber]
    sum = firstNumber + secondNumber

    renderGame()
}


function renderGame() {


    cardsEl.textContent = "Cards: "
    
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum


    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
}


function newCard() {
    
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        
        renderGame()
    }
    
}



