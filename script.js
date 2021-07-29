const element = document.getElementsByClassName('element')
const element1 = document.querySelector('.element1')
const element2 = document.querySelector('.element2')
const element3 = document.querySelector('.element3')
const element4 = document.querySelector('.element4')
const element5 = document.querySelector('.element5')
const element6 = document.querySelector('.element6')
const element7 = document.querySelector('.element7')
const element8 = document.querySelector('.element8')
const element9 = document.querySelector('.element9')


element1.addEventListener('click', playerToggle1)
element2.addEventListener('click', playerToggle2)
element3.addEventListener('click', playerToggle3)


let player = 'cross'
let i = 0
let elemento = document.getElementsByClassName('element')
let cross = document.getElementsByClassName('cross')
let circle = document.getElementsByClassName('circle')

function playerToggle1() {
    if (player === 'cross') {
        element1.classList.add('cross')
        element1.classList.remove('circle')
        player = 'circle'
    } else {
        element1.classList.add('circle')
        element1.classList.remove('cross')
        player = 'cross'
    }
}


function playerToggle2() {
    if (player === 'cross') {
        element2.classList.add('cross')
        element2.classList.remove('circle')
        player = 'circle'
    } else {
        element2.classList.add('circle')
        element2.classList.remove('cross')
        player = 'cross'

    }
}

function playerToggle3() {
    if (player === 'cross') {
        element3.classList.add('cross')
        element3.classList.remove('circle')
        player = 'circle'
    } else {
        element3.classList.add('circle')
        element3.classList.remove('cross')
        player = 'cross'

    }
}