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
            this.parent.style.gridTemplateColumns = `repeat(${this.gridSize}, minmax(20px,1fr))`;
            this.parent.style.gridTemplateRows = `repeat(${this.gridSize}, minmax(20px,1fr))`;
            for (let x = 0; x < this.gridSize; x++) {

                let element = document.createElement('div')
                this.parent.appendChild(element);
            }
        }
    }
}
