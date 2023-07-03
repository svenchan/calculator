//Display and input
const output = document.getElementById('output');

function updateDisplay(number) {
    if (output.textContent === '0'){
        output.textContent = number;
    } else {
        output.textContent += number;
    }
}

function scrollDisplayToEnd() {
    const display = document.getElementById('scroll-wrapper');
    display.scrollLeft = display.scrollWidth;
}

//Top Row Buttons
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
    output.textContent = '0';
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
    updateDisplay('7');
    scrollDisplayToEnd();
});
const eightBtn = document.getElementById('eight');
eightBtn.addEventListener('click', () => {
    updateDisplay('8');
    scrollDisplayToEnd();
});
const nineBtn = document.getElementById('nine');
nineBtn.addEventListener('click', () => {
    updateDisplay('9');
    scrollDisplayToEnd();
});
const fourBtn = document.getElementById('four');
fourBtn.addEventListener('click', () => {
    updateDisplay('4');
    scrollDisplayToEnd();
});
const fiveBtn = document.getElementById('five');
fiveBtn.addEventListener('click', () => {
    updateDisplay('5');
    scrollDisplayToEnd();
});
const sixBtn = document.getElementById('six');
sixBtn.addEventListener('click', () => {
    updateDisplay('6');
    scrollDisplayToEnd();
});
const oneBtn = document.getElementById('one');
oneBtn.addEventListener('click', () => {
    updateDisplay('1');
    scrollDisplayToEnd();
});
const twoBtn = document.getElementById('two');
twoBtn.addEventListener('click', () => {
    updateDisplay('2');
    scrollDisplayToEnd();
});
const threeBtn = document.getElementById('three');
threeBtn.addEventListener('click', () => {
    updateDisplay('3');
    scrollDisplayToEnd();
});
const zeroBtn = document.getElementById('zero');
zeroBtn.addEventListener('click', () => {
    updateDisplay('0');
    scrollDisplayToEnd();
});
const decimalBtn = document.getElementById('decimal');
decimalBtn.addEventListener('click', () => {
    updateDisplay('.');
    scrollDisplayToEnd();
});

//Function Buttons
const functionBtns = document.getElementsByClassName('function');

function removeClassFromBtns(group, className){
    for (let i = 0; i < group.length; i++) {
        group[i].classList.remove(className);
    }
}

const additionBtn = document.getElementById('addition');
additionBtn.addEventListener('click', () => {
    removeClassFromBtns(functionBtns, 'active-function');
    additionBtn.classList.add('active-function');
    return '+';

});
const devideBtn = document.getElementById('devide');
devideBtn.addEventListener('click', () => {
    removeClassFromBtns(functionBtns, 'active-function');
    devideBtn.classList.add('active-function');
    return '/';
});
const equalsBtn = document.getElementById('equals');
equalsBtn.addEventListener('click', () => {
    removeClassFromBtns(functionBtns, 'active-function');
    equalsBtn.classList.add('active-function');
    operate();
});
const multiplyBtn = document.getElementById('multiply');
multiplyBtn.addEventListener('click', () => {
    removeClassFromBtns(functionBtns, 'active-function');
    multiplyBtn.classList.add('active-function');
    return '*';
});

const subtractBtn = document.getElementById('subtract');
subtractBtn.addEventListener('click', () => {
    removeClassFromBtns(functionBtns, 'active-function');
    subtractBtn.classList.add('active-function');
    return '-';
});


//Keyboard 
document.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.key === '.'){updateDisplay('.')}
    if (event.key === '0'){updateDisplay('0')}
    if (event.key === '1'){updateDisplay('1')}
    if (event.key === '2'){updateDisplay('2')}
    if (event.key === '3'){updateDisplay('3')}
    if (event.key === '4'){updateDisplay('4')}
    if (event.key === '5'){updateDisplay('5')}
    if (event.key === '6'){updateDisplay('6')}
    if (event.key === '7'){updateDisplay('7')}
    if (event.key === '8'){updateDisplay('8')}
    if (event.key === '9'){updateDisplay('9')}
    if (event.key === 'Backspace'){output.textContent = 0;}
    scrollDisplayToEnd();

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