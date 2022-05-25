let getPixelBoard = document.querySelector('#pixel-board');
/* ---------------------- COLORS ---------------------*/
let getColorBlack = document.querySelector('#black');
let getColorRed = document.querySelector('#red');
let getColorGreen = document.querySelector('#green');
let getColorBlue = document.querySelector('#blue');
getColorBlack.className = 'color selected'

let getAllColors = document.querySelectorAll('.color')

/*            gerador de pixels para pintar            */ 
function pixelsGenerate() {

    for (let index = 1; index <= 25; index += 1) { 
        let pixels = document.createElement('div')
        pixels.className = 'pixel';
        pixels.addEventListener('click', paintColors)
        getPixelBoard.appendChild(pixels);
    }
}

pixelsGenerate()

/*      Funções que selecionam as cores na paleta de cores     */
function selectColorRed() {

    getColorRed.addEventListener('click', function() {
   
        if (getColorRed.className !== 'color selected'){
            getColorGreen.className = 'color';
            getColorBlue.className = 'color';
            getColorBlack.className = 'color'
            getColorRed.className = 'color selected';
        } /*else {
            getColorRed.className = 'color';
        }*/
    })
}
selectColorRed()

function selectColorGreen() {

    getColorGreen.addEventListener('click', function() {
   
        if (getColorGreen.className !== 'color selected'){
            getColorRed.className = 'color';
            getColorBlue.className = 'color';
            getColorBlack.className = 'color'
            getColorGreen.className = 'color selected';
        } /*else {
            getColorGreen.className = 'color';
        }*/
    })
}
selectColorGreen()

function selectColorBlue() {

    getColorBlue.addEventListener('click', function() {
   
        if (getColorBlue.className !== 'color selected'){
            getColorGreen.className = 'color';
            getColorRed.className ='color';
            getColorBlack.className = 'color'
            getColorBlue.className = 'color selected';
        } /*else {
            getColorBlue.className = 'color';
        }*/
    })
}
selectColorBlue()

function selectColorBlack() {

    getColorBlack.addEventListener('click', function() {
   
        if (getColorBlack.className !== 'color selected'){
            getColorGreen.className = 'color';
            getColorRed.className = 'color';
            getColorBlue.className = 'color';
            getColorBlack.className = 'color selected';
        } /*else {
            getColorBlack.className = 'color';
        }*/
    })
}
selectColorBlack()

function colorsbox(){
    getAllColors[0].style.backgroundColor = 'black';
    getAllColors[1].style.backgroundColor = 'red';
    getAllColors[2].style.backgroundColor = 'green';
    getAllColors[3].style.backgroundColor = 'blue';
}
colorsbox()

function paintColors(event){
    
    event.target.style.backgroundColor = getAllColors[0].style.backgroundColor

    if(getColorRed.className === 'color selected') {
        event.target.style.backgroundColor = getAllColors[1].style.backgroundColor;
    } else if (getColorGreen.className === 'color selected') {
        event.target.style.backgroundColor = getAllColors[2].style.backgroundColor;
    } else if (getColorBlue.className === 'color selected'){
        event.target.style.backgroundColor = getAllColors[3].style.backgroundColor;
    }
}

