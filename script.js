const positionPixelBoard = document.getElementById('pixel-board');
function boxPixel() {
  for (let i = 0; i < 5; i += 1) {
    const linha = document.createElement('div');
    positionPixelBoard.appendChild(linha);
    for (let j = 0; j < 5; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linha.appendChild(pixel);
    }
  }
}
boxPixel();

function addClasseSelected() {
  let vetor = document.querySelectorAll('.color');
  
  for (let i = 0; i < vetor.length; i += 1) {
    vetor[i].className == 'selected'
  }
}