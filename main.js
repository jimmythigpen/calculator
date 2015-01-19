var operation;
var displayedNumber;
var calculatedNumber;

function numberPressed(number) {
  console.log(operation)
  displayedNumber = number;
  if (operation == '+') {
    calculatedNumber = calculatedNumber + number;
    operation = null;
  } else if (operation == '-') {
    calculatedNumber = calculatedNumber - number;
    operation = null;
  } else if (operation == '*') {
    calculatedNumber = calculatedNumber * number;
    operation = null;
  } else if (operation == '/') {
    calculatedNumber = calculatedNumber / number;
    operation = null;
  } else {
    displayedNumber = calculatedNumber = number;
  }

  document.getElementById('result').textContent = displayedNumber;
}

function zeroPressed(event) {
  event.preventDefault();
  numberPressed(Number(0));  

}

function onePressed(event) {
  event.preventDefault();
  numberPressed(Number(1));
}

function twoPressed(event) {
  event.preventDefault();
  numberPressed(Number(2));
}

function threePressed(event) {
  event.preventDefault();
  numberPressed(Number(3));
}

function fourPressed(event) {
  event.preventDefault();
  numberPressed(Number(4));
}

function fivePressed(event) {
  event.preventDefault();
  numberPressed(Number(5));
}

function sixPressed(event) {
  event.preventDefault();
  numberPressed(Number(6));
}

function sevenPressed(event) {
  event.preventDefault();
  numberPressed(Number(7));
}

function eightPressed(event) {
  event.preventDefault();
  numberPressed(Number(8));
}

function ninePressed(event) {
  event.preventDefault();
  numberPressed(Number(9));
}

function addPressed() {
  event.preventDefault();
  operation = '+';
}

function subtractPressed() {
  event.preventDefault();
  operation = '-';
}

function multiplyPressed() {
  event.preventDefault();
  operation = '*';
}

function dividePressed() {
  event.preventDefault();
  operation = '/';
}

function equalsPressed(event) {
  event.preventDefault();

  document.getElementById('result').textContent = calculatedNumber;
}

function clearPressed(event) {
  event.preventDefault();
  displayedNumber = calculatedNumber = 0;
  document.getElementById('result').textContent = calculatedNumber;
}


document.getElementById('clear').addEventListener('click', clearPressed);
document.getElementById('0').addEventListener('click', zeroPressed);
document.getElementById('1').addEventListener('click', onePressed);
document.getElementById('2').addEventListener('click', twoPressed);
document.getElementById('3').addEventListener('click', threePressed);
document.getElementById('4').addEventListener('click', fourPressed);
document.getElementById('5').addEventListener('click', fivePressed);
document.getElementById('6').addEventListener('click', sixPressed);
document.getElementById('7').addEventListener('click', sevenPressed);
document.getElementById('8').addEventListener('click', eightPressed);
document.getElementById('9').addEventListener('click', ninePressed);
document.getElementById('add').addEventListener('click', addPressed);
document.getElementById('equals').addEventListener('click', equalsPressed);
document.getElementById('subtract').addEventListener('click', subtractPressed);
document.getElementById('multiply').addEventListener('click', multiplyPressed);
document.getElementById('divide').addEventListener('click', dividePressed);
