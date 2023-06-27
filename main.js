//Display and input
const output = document.getElementById('output');

//Top Row Buttons
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
    output.textContent = '';
});

const negativeBtn = document.getElementById('negative');
negativeBtn.addEventListener('click', () => {
    output.textContent = '-' + output.textContent;
});

const percentileBtn = document.getElementById('percentile');
percentileBtn.addEventListener('click', () => {
    percentage(Number(output.textContent));
});

//Number Buttons
const sevenBtn = document.getElementById('seven');
sevenBtn.addEventListener('click', () => {
    output.textContent += '7';
});
const eightBtn = document.getElementById('eigth');
eightBtn.addEventListener('click', () => {
    output.textContent += '8';
});
const nineBtn = document.getElementById('nine');
nineBtn.addEventListener('click', () => {
    output.textContent += '9';
});
const fourBtn = document.getElementById('four');
fourBtn.addEventListener('click', () => {
    output.textContent += '4';
});
const fiveBtn = document.getElementById('five');
fiveBtn.addEventListener('click', () => {
    output.textContent += '5';
});
const sixBtn = document.getElementById('six');
sixBtn.addEventListener('click', () => {
    output.textContent += '6';
});
const oneBtn = document.getElementById('one');
oneBtn.addEventListener('click', () => {
    output.textContent += '1';
});
const twoBtn = document.getElementById('two');
twoBtn.addEventListener('click', () => {
    output.textContent += '2';
});
const threeBtn = document.getElementById('three');
threeBtn.addEventListener('click', () => {
    output.textContent += '3';
});
const zeroBtn = document.getElementById('zero');
zeroBtn.addEventListener('click', () => {
    output.textContent += '0';
});
const decimalBtn = document.getElementById('decimal');
decimalBtn.addEventListener('click', () => {
    output.textContent += '.';
});

//Function Buttons
const additionBtn = document.getElementById('addition');
additionBtn.addEventListener('click', () => {
    return '+';
});
const devideBtn = document.getElementById('devide');
devideBtn.addEventListener('click', () => {
    return '/';
});
const equalsBtn = document.getElementById('equals');
equalsBtn.addEventListener('click', () => {
    operate();
});
const multiplyBtn = document.getElementById('multiply');
multiplyBtn.addEventListener('click', () => {
    return '*';
});

const subtractBtn = document.getElementById('subtract');
subtractBtn.addEventListener('click', () => {
    return '-';
});


//Keyboard 
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

// operate function
let a = '';
let b = '';
// use promise race for operator?
let operator = '';

function operate(a, operator, b) {
    if (operator === '+'){
        output.textContent = a + b;
    } else if (operator === '-') {
        output.textContent = a - b;
    }
}

//math functions
function percentage(value) {
    return value / 100;
}

function addition(a, b){
    return a + b;
}