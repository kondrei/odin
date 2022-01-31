export class Sketck {
    constructor(gridSize) {
        this.parent = document.querySelector('.grid-container')
        this.button = document.querySelector('#btn')
        this.gridSize = gridSize
        console.log('constructor loaded')
        this.startGame()
    }

    startGame() {
        this._addElements();
        this.button.addEventListener('click', () => { this._resetGrid() })
    }

    _addElements() {
        for (let i = 0; i < this.gridSize * this.gridSize; i++) {
            this.parent.style.gridTemplateColumns = `repeat(${this.gridSize}, minmax(20px,1fr))`;
            this.parent.style.gridTemplateRows = `repeat(${this.gridSize}, minmax(20px,1fr))`;

            let element = document.createElement('div')
            element.addEventListener('mouseover', () => {
                element.style.backgroundColor = '#6e7e85'
            })
            this.parent.appendChild(element);
        }
    }

    _resetGrid() {
        let grids = this.parent.children
        for (let i = 0; i < grids.length; i++) {
            grids[i].style.backgroundColor = "#b7cece"
        }
    }
}
