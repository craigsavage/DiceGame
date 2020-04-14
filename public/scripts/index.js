const dice1 = document.querySelector('.p1Dice');
const dice2 = document.querySelector('.p2Dice');
const winnerText = document.querySelector('.winner-text');
const roll = document.querySelector('.roll');

const diceSides = 6;

roll.addEventListener('click', () => {
    let p1Roll = rollDice(diceSides);
    let p2Roll = rollDice(diceSides);

    dice1.setAttribute('src', `./public/images/D${p1Roll}.png`)
    dice2.setAttribute('src', `./public/images/D${p2Roll}.png`)

    let winner = checkWinner(p1Roll, p2Roll);
    winnerText.innerText = winner;
});

// Set random roll from 1 number of sides on the dice
let rollDice = (sides) => {
    return Math.floor(Math.random() * sides) + 1;
}

// Check which player got the higher number
let checkWinner = (player1, player2) => {
    if(player1 === player2) {
        return 'WOW its a tie!! 😲'
    } else if (player1 > player2) {
        return 'Player 1 Wins!! 🎉'
    } else {
        return 'Player 2 Wins!! 🎉'
    }
}