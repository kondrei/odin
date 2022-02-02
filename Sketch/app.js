export class Sketck {
    constructor(gridSize) {
        this.parent = document.querySelector('.grid-container')
        this.button = document.querySelector('#btn')
        this.color = document.querySelector('#color')
        this.setGridSize = document.querySelector('#gridSize')
        this.gridSize = gridSize
        this.output = document.querySelector('#output')
        this.output.textContent = this.gridSize + ' x ' + this.gridSize
        this.rainbow = document.querySelector('#rainbow')
        this.startGame()
    }

    startGame() {
        this._addElements();
        this.button.addEventListener('click', () => { this._resetGrid() })
        this.setGridSize.addEventListener('input', () => { this._resizeGrid() })
    }

    _addElements() {
        while (this.parent.lastChild) {
            this.parent.lastChild.remove()
        }
        this.parent.style.gridTemplateColumns = `repeat(${this.gridSize}, minmax(5px,1fr))`;
        this.parent.style.gridTemplateRows = `repeat(${this.gridSize}, minmax(5px,1fr))`;
        for (let i = 0; i < this.gridSize * this.gridSize; i++) {
            let element = document.createElement('div')
            element.addEventListener('mouseenter', () => {
                element.style.backgroundColor = this._color()
            })
            this.parent.appendChild(element);
        }
    }

    _color() {
        if (!rainbow.checked) {
            return this.color.value
        }
        else {
            let randomColor = '#' + Math.random().toString(16).substr(-6);
            this.color.value = randomColor
            return randomColor;
        }
    }
    _resetGrid() {
        let grids = this.parent.children
        for (let i = 0; i < grids.length; i++) {
            grids[i].style.backgroundColor = "#b7cece"
        }
    }

    _resizeGrid() {
        this.gridSize = this.setGridSize.value
        this._addElements()
        this.output.textContent = this.setGridSize.value + ' x ' + this.setGridSize.value

    }
}
