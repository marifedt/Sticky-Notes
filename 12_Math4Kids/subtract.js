
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

function createQuestion(){
    let ques1 = randomNumber(limit);
    let ques2 = randomNumber(limit);
    if(ques1 < ques2){
        let placeholder = ques1;
        ques1 = ques2;
        ques2 = placeholder;
    }
    let ans = ques1 - ques2;

    answer = ans;
    question1.innerHTML = ques1;
    question2.innerHTML = ques2;
    operation.innerHTML = '-';

    var locAnswer = randomNumber(3);

    for (let i = 0; i < answers.length; i++) {
        let textContent = answers[i].querySelector('h1');
        if(locAnswer === i){
            textContent.innerHTML = answer;
        } else{
            let num = null;
           do {
                num = randomNumber(11);
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
