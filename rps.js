const gameChoose = ['Rock', 'Paper', 'Scissors']
let computerChoose = document.getElementById('computer')
let playerChoose = document.getElementById('human');

let computerScore, humanScore = 0;

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
            resetCss(playerChoose)
            e.target.style.backgroundColor = '#c2dbb4';
            // if (gameChoose.indexOf(e.target.innerHTML) === computerPlay()) {
            //     console.log('catch')
            // }
            console.log(item)
            if ((computerPlay() === item))
                console.log('egal')
            if ((computerPlay() === 0) && item > 0) {
                console.log('computer wins')
            }
        })
    }

}

startGame()