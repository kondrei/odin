const gameChoose = ['Rock', 'Paper', 'Scissors']
let computerChoose = document.getElementById('computer')
let playerChoose = document.getElementById('human');

let computerScore = 0;
let playerScore = 0;

let computerScoreHolder = document.querySelector('#computerScore');
let playerScoreHolder = document.querySelector('#playerScore');
updateScore();

function updateScore() {
    computerScoreHolder.innerText = computerScore;
    playerScoreHolder.innerText = playerScore;
}
function computerPlay() {
    resetCss(computerChoose);
    let randomChoose = Math.floor(Math.random() * 3)
    for (let item = 0; item < computerChoose.children.length; item++) {
        if (randomChoose === item) {
            computerChoose.children[item].style.backgroundColor = '#c2dbb4'
        }
    }
    return randomChoose
}


function resetCss(element) {
    for (let item = 0; item < element.children.length; item++) {
        element.children[item].style.backgroundColor = 'white'
    }
}
function startGame() {

    for (let item = 0; item < playerChoose.children.length; item++) {
        playerChoose.children[item].addEventListener('click', (e) => {
            let computerChoose = computerPlay();
            resetCss(playerChoose)
            e.target.style.backgroundColor = '#c2dbb4';
            // if (gameChoose.indexOf(e.target.innerHTML) === computerPlay()) {
            //     console.log('catch')
            // }
            if ((computerChoose === item)) { //draw
                computerScore++;
                playerScore++;
            }
            // ['Rock', 'Paper', 'Scissors']
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
    computerScore = 0;
    playerScore = 0;
    updateScore();
    resetCss(playerChoose)
    resetCss(computerChoose)
})
startGame()