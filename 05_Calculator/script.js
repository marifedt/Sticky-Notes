const userInput = document.querySelector("#userInput");

var expression = "";

function press(input){
    expression += input;
    userInput.value = expression;
}

function equal(){
    userInput.value = eval(expression);
   
    expression=userInput.value;
}

function erase(){
    expression="";
    userInput.value=expression;
}