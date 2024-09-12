const userInput = document.querySelector('.enter-num')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const submit = document.querySelector('.submit-btn')
const startButton = document.querySelector('.Start-game')
const allGuesses = document.querySelector('.all-guesses')
const allGuessesArray = []

let randomNumber = Math.round(Math.random() * 100)

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const userInputValue = parseInt(userInput.value)
    if(userInputValue < randomNumber){
        result.innerText = 'Too low!'
    }else if(userInputValue > randomNumber){
        result.innerText = 'Too  high!'
    }else {
        result.innerText = 'You got it Congrats!!!'
        startButton.disabled = false
        submit.disabled = true
    }
    allGuessesArray.push(userInputValue)
    allGuesses.innerText = 'Your guesses: ' +  allGuessesArray.join(', ')
    form.reset()
})

startButton.addEventListener('click', () => {
    result.innerText = ''
    allGuesses.innerText = ''
    allGuessesArray.length = 0
    submit.disabled = false
    startButton.disabled = true
    randomNumber = Math.round(Math.random() * 100)
})
