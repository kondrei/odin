const gameChoose = ['Rock', 'Paper', 'Scissors']
let start = false;
let computerChoose = document.getElementById('computer')
let playerChoose = document.getElementById('human');

let computerScore = 0;
let playerScore = 0;

let computerScoreHolder = document.querySelector('#computerScore');
let playerScoreHolder = document.querySelector('#playerScore');

let score = document.querySelector('.win');

updateScore();

function updateScore() {
    computerScoreHolder.innerText = computerScore;
    playerScoreHolder.innerText = playerScore;
    if (start) {
        if (computerScore === playerScore) {
            score.innerText = 'Drawn!'
        }

        if (computerScore > playerScore) {
            score.innerText = 'Computer win!';
        }
        if (computerScore < playerScore) {
            score.innerText = 'Player win!';
        }
    }
}
function computerPlay() {
    resetCss(computerChoose);
    let randomChoose = Math.floor(Math.random() * 3)
    for (let item = 0; item < computerChoose.children.length; item++) {
        if (randomChoose === item) {
            computerChoose.children[item].style.filter = 'sepia(100%)';
        }
    }
    return randomChoose
}


function resetCss(element) {
    for (let item = 0; item < element.children.length; item++) {
        element.children[item].style.filter = 'sepia(0%)';
    }
}
function startGame() {

    for (let item = 0; item < playerChoose.children.length; item++) {
        playerChoose.children[item].addEventListener('click', (e) => {
            start = true;
            let computerChoose = computerPlay();
            resetCss(playerChoose)
            e.target.style.filter = 'sepia(100%)';
            if ((computerChoose === item)) { //draw
                computerScore++;
                playerScore++;
            }
            if ((computerChoose === 0) && item === 2) {  //rock > scissors
                computerScore++;
            }

            if ((computerChoose === 2) && item === 0) {  //scissors > rock
                playerScore++;
            }

            if ((computerChoose === 2) && item === 1) {  //Scissors > Paper
                computerScore++;
            }
            if ((computerChoose === 1) && item === 2) {  // Paper> Scissors
                playerScore++;
            }

            if ((computerChoose === 1) && item === 0) {  // paper > rock
                computerScore++;
            }

            if ((computerChoose === 0) && item === 1) {  // paper > rock
                playerScore++;
            }

            updateScore();
        })
    }

}

let reset = document.querySelector('button')

reset.addEventListener('click', () => {
    start = false;
    computerScore = 0;
    playerScore = 0;
    updateScore();
    resetCss(playerChoose);
    resetCss(computerChoose);
    score.innerText = 'Choose Rock, Paper or Scissors!'
})
startGame()