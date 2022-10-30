// readline module
const readline = require('readline')
// creating an interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const randomInRange = (min, max) => {
    const rndInt = Math.floor(Math.random() * max) + min
    return rndInt
}

let secretNumber = 0
let numAttempts = 0

const checkGuess = (number) => {
    if (number > secretNumber) {
        console.log('Too High')
        return false
    } else if (number < secretNumber) {
        console.log('Too Low')
        return false
    } else {
        console.log('Correct!')
        return true
    }
}

const askGuess = () => {

    rl.question('Enter a Guess: ', number => {
        if (checkGuess(Number(number))) {
            console.log('YOU WON!')
            rl.close()
        } else {
            numAttempts--
            if (numAttempts === 0) {
                console.log('You Lose')
                rl.close()
            }else{
                askGuess()
            }
        }
    })
}


const askRange = () => {
    rl.question('Enter Min Number: ', min => {
        rl.question('Enter Max Number: ', max => {
            console.log("I'm thinking of a number between", min, "and", max, "...")
            let number = randomInRange(Number(min), Number(max))
            secretNumber = number
            askGuess()
        })
    })
}


const askLimit = ()=>{
    rl.question('Enter the number of attempts: ', num=>{
        console.log("You've", num, "attempts for correct guess")
        numAttempts = num
        askRange()
    })
}

askLimit()

