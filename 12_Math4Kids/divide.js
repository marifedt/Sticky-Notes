
const limit = 11;

const question1 = document.querySelector('#question1');
const question2 = document.querySelector('#question2');
const operation = document.querySelector('#operation');
const answers = document.querySelectorAll('.box');

answers.forEach(item => {
    item.addEventListener('click', ()=>{
        checkAnswer(item);
    });
});

var answer = null;

window.onload = () => {
    createQuestion();
  };

function randomNumber(limit) {
    return Math.floor(Math.random()*limit);
}

function randomDecimal(limit) {
    var precision = 10;
    var randomnum = Math.floor(Math.random()  * (10 * precision - 1 * precision) + 1 * precision) / (1*precision);
    return randomnum;
}

function createQuestion(){
    let changeSize = false;
    let ques1 = randomNumber(limit);
    let ques2 = randomNumber(limit);
    let ans = ques1 / ques2;
    if(isNaN(ans)){
        console.log('creating another question');
        createQuestion();
        return;
    }
    
    answer = ans.toFixed(1);
    question1.innerHTML = ques1;
    question2.innerHTML = ques2;
    operation.innerHTML = '/';

    var locAnswer = randomNumber(3);

    for (let i = 0; i < answers.length; i++) {
        let textContent = answers[i].querySelector('h1');
        if(locAnswer === i){
            if(ans === Infinity){
                answer = 'undefined';
                // This is how you could get the property: font-size.
                var style = window.getComputedStyle(answers[i], null).getPropertyValue('font-size');
                var fontSize = parseFloat(style); 
                console.log(fontSize);
                answers[i].style.fontSize = 5.2 + "vw";
            }
            textContent.innerHTML = answer;
        } else{
            let num = null;
           do {
                num = randomDecimal().toFixed(1);
                console.log(answer);
                console.log(num);
           } while (num == answer);
           textContent.innerHTML = num;
           num = null;
        }
    }

}

function checkAnswer(element){
    if(element.querySelector('h1').innerHTML == answer){
        createQuestion();
    } else{
        document.querySelector('#error').play();
    }
}