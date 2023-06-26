//buttons
const clearBtn = document.getElementById('clear');
const negativeBtn = document.getElementById('negative');
const percentileBtn = document.getElementById('percentile');
const devideBtn = document.getElementById('devide');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('8');
const nineBtn = document.getElementById('9');
const multiplyBtn = document.getElementById('multiply');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const subtractBtn = document.getElementById('subtract');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const additionBtn = document.getElementById('addition');
const zeroBtn = document.getElementById('zero');
const decimalBtn = document.getElementById('decimal');
const equalsBtn = document.getElementById('equals');
//Display and input
const output = document.getElementById('output');


document.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.key === '.'){output.textContent += event.key;}
    if (event.key === '0'){output.textContent += event.key;}
    if (event.key === '1'){output.textContent += event.key;}
    if (event.key === '2'){output.textContent += event.key;}
    if (event.key === '3'){output.textContent += event.key;}
    if (event.key === '4'){output.textContent += event.key;}
    if (event.key === '5'){output.textContent += event.key;}
    if (event.key === '6'){output.textContent += event.key;}
    if (event.key === '7'){output.textContent += event.key;}
    if (event.key === '8'){output.textContent += event.key;}
    if (event.key === '9'){output.textContent += event.key;}
});
