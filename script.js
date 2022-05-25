let getPixelBoard = document.querySelector('#pixel-board');
/* ---------------------- COLORS ---------------------*/
let getColorBlack = document.querySelector('#black');
let getColorRed = document.querySelector('#red');
let getColorGreen = document.querySelector('#green');
let getColorBlue = document.querySelector('#blue');
getColorBlack.className = 'color selected'

/*            gerador de pixels para pintar            */ 
function pixelsGenerate() {

    for (let index = 1; index <= 25; index += 1) { 
        let pixels = document.createElement('div')
        getPixelBoard.appendChild(pixels);
        pixels.className = 'pixel';
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

