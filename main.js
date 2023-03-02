const typing = document.getElementById("typing");
const answer = document.getElementById("answer");

//Operators
const clear = document.getElementById("clear");
const brackets = document.getElementById("brackets");
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const dot = document.getElementById("dot");
const equal_to = document.getElementById("equal_to");
const plus_minus = document.getElementById("plus_minus");

//Numbers
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

let text = '';
let solution;
let count = 7;
let bracketCount = 0;

one.addEventListener('click', function(){
    text = text + '1';
    typing.innerText = text;
    count = 0;
});
two.addEventListener('click', function(){
    text = text + '2';
    typing.innerText = text;
    count = 0;
});
three.addEventListener('click', function(){
    text = text + '3';
    typing.innerText = text;
    count = 0;
});
four.addEventListener('click', function(){
    text = text + '4';
    typing.innerText = text;
    count = 0;
});
five.addEventListener('click', function(){
    text = text + '5';
    typing.innerText = text;
    count = 0;
});
six.addEventListener('click', function(){
    text = text + '6';
    typing.innerText = text;
    count = 0;
});
seven.addEventListener('click', function(){
    text = text + '7';
    typing.innerText = text;
    count = 0;
});
eight.addEventListener('click', function(){
    text = text + '8';
    typing.innerText = text;
    count = 0;
});
nine.addEventListener('click', function(){
    text = text + '9';
    typing.innerText = text;
    count = 0;
});
zero.addEventListener('click', function(){
    text = text + '0';
    typing.innerText = text;
    count = 0;
});

//Operators
add.addEventListener('click', function(){
    if (count == 0) {
        text = text + '+';
        typing.innerText = text;
        count = 1;
    }
});
subtract.addEventListener('click', function(){
    if (count == 0) {
        text = text + '-';
        typing.innerText = text;
        count = 1;
    }
});
multiply.addEventListener('click', function(){
    if (count == 0) {
        text = text + '*';
        typing.innerText = text;
        count = 1;
    }
});
divide.addEventListener('click', function(){
    if (count == 0) {
        text = text + '/';
        typing.innerText = text;
        count = 1;
    }
});
brackets.addEventListener('click', function(){
    if (bracketCount == 0) {
        text = text + '(';
        typing.innerText = text;
        bracketCount = 1;
    }
    else{
        text = text + ')';
        typing.innerText = text;
        bracketCount = 0;
    }
});

dot.addEventListener('click',function(){
    if (count == 0) {
        text = text + '.';
        typing.innerText = text;
        count = 1;
    }
});


// Clear
clear.addEventListener('click', function(){
    text = '';
    typing.innerText = text;
    answer.innerText = '';
    count = 0;
});


equal_to.addEventListener('click',function(){
    let ans = eval(text);
    answer.innerText = ans;
    text = '';
    ans = 0;
    count = 0;  
});