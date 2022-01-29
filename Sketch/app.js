export class Sketck {
    constructor(gridSize) {
        this.parent = document.querySelector('.grid-container')
        this.gridSize = gridSize
        console.log('constructor loaded')
        this.startGame()
    }

    startGame() {
        // let button = document.getElementById('btn');
        this.addElements();
    }

    addElements() {
        for (let i = 0; i < this.gridSize; i++) {
            let element = document.createElement('div')
            this.parent.appendChild(element);
        }
    }
}
