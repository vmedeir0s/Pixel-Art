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

// function removeClassSelected(event) {
//   if (event.target.classList.contains('selected')) {
//     event.target.classList.remove('selected');
//     console.log('clickou');
//   }
// }

// function addClassSelected() {
//   for (let i = 0; i < vetorCores.length; i += 1) {
//     vetorCores[i].addEventListener('click', removeClassSelected(event));
//   }
// }
// addClassSelected();

window.onload = function () {
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
};
