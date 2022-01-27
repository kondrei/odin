const container = document.querySelector('#container')

function creteDomElement(type, context = '', parent) {
    let element = document.createElement(type);
    element.textContent = context
    parent.appendChild(element)
    return element;
}

const para = creteDomElement('p', 'Hey I\’m red', container)

const heading = creteDomElement('h3', 'I’m a blue h3!', container)

const div = creteDomElement('div', '', container)
div.style.backgroundColor = 'pink'

const heading2 = creteDomElement('h2', 'I\’m in a div', div)

const para2 = creteDomElement('p', 'mee too', div)

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('mouseover', (e) => {
        console.log('you click on button ', e.target.innerText)
    })
})