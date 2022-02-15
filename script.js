const positionPixelBoard = document.getElementById('pixel-board');
function boxPixel(value = 5) {
  for (let i = 0; i < value; i += 1) {
    const linha = document.createElement('div');
    positionPixelBoard.appendChild(linha);
    for (let j = 0; j < value; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linha.appendChild(pixel);
    }
  }
}
boxPixel();

function addClassSelect() {
  const positionPaletColor = document.querySelector('#color-palette');
  positionPaletColor.addEventListener('click', function(event) {
    let positionSelect = document.querySelector('.selected');
    positionSelect.classList.remove('selected');
    event.target.classList.add('selected');
  });
}
addClassSelect();

function addBackgroundOnPixel() {
  let positionBoard = document.querySelector('#pixel-board');
  positionBoard.addEventListener('click', function(event) {
    let positionSelect = document.querySelector('.selected');
    let objetoCss = window.getComputedStyle(positionSelect);
    let background = objetoCss.getPropertyValue('background-color')
    event.target.style.backgroundColor = background;
  });
}
addBackgroundOnPixel();

function clearBoard() {
  
  let positionButton = document.querySelector('#clear-board');
  positionButton.addEventListener('click',function(){
    let positionPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < positionPixels.length; i += 1){
      if(positionPixels[i].hasAttribute('style')){
        positionPixels[i].removeAttribute('style');
      }
    }
  })
}
clearBoard();


function verificaInputValue(){
  let posBotao = document.querySelector("#generate-board");
  posBotao.addEventListener('click',function(){
    let posInput = document.querySelector("#board-size").value
    if(posInput === '' || posInput === 0 || posInput === null || posInput === undefined){
      window.alert('Board Inválido!');
    }
    else {
      if(posInput>50){
        posInput = 50;
      }
      if(posInput<5){
        posInput = 5;
      }
      document.querySelector("#pixel-board").innerHTML = '';
      boxPixel(posInput);
    }
  })
}
verificaInputValue();


function geraCor() {
  const cor = Math.floor(Math.random() * 16777215).toString(16);
  return cor;
}
const corBox2 = document.querySelector('#box2');
const corBox3 = document.querySelector('#box3');
const corBox4 = document.querySelector('#box4');
corBox2.style.backgroundColor = `#${geraCor()}`;
corBox3.style.backgroundColor = `#${geraCor()}`;
corBox4.style.backgroundColor = `#${geraCor()}`;
