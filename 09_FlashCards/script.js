const fcMenu = document.querySelector(".fc-menu");
const container = document.querySelector(".inner-container");
const fcAllItems = document.querySelector(".fc-allItems");
const ques = document.querySelector("#question");
const ans = document.querySelector("#answer");

//array for the contents
//Local storage
let contentArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];




function addCard() {
       fcMenu.style.visibility="visible";
  
}

function closeMenu(){
    fcMenu.querySelector("#question").value="";
    fcMenu.querySelector("#answer").value="";
    fcMenu.style.visibility="collapse";
}



//author's solution
function fcMaker(text,delThisIndex){
  //My Solution
    var divItem = document.createElement("div");
    divItem.className = "fc-item";
    var answer = document.createElement("span");
    answer.className = "fc-item-answer";
    answer.textContent = text.my_answer;
    var question = document.createElement("span");
    question.className = "fc-item-question";
    question.textContent = text.my_question;
    var icon = document.createElement("i");
    icon.className = "fa-solid fa-minus";
    
    divItem.addEventListener('click', ()=>{
        if(answer.style.visibility === "visible"){
            answer.style.visibility = "hidden"
        } else{ answer.style.visibility = "visible"}
    },false);
    
    
    icon.addEventListener('click', ()=>{
        divItem.remove();
        contentArray.splice(delThisIndex, 1);
        localStorage.setItem('items', JSON.stringify(contentArray));
        window.location.reload();
    },false)
   
    answer.style.visibility="hidden";
    
    divItem.append(icon);
    divItem.append(question);
    divItem.append(answer);
        
    fcAllItems.appendChild(divItem);
}

contentArray.forEach(fcMaker);

function createCard(){
    //Author's Solution
    var flashcard_info = {
        'my_question' : ques.value,
        'my_answer' : ans.value
    }

    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));

    fcMaker(contentArray[contentArray.length - 1],contentArray.length - 1);
    ques.value = '';
    ans.value = '';
}

function removeCards() {
    localStorage.clear();
    fcAllItems.innerHTML='';
    contentArray=[];
    // var allcards = document.querySelectorAll(".fc-item");
    // allcards.forEach((item)=>{
    //     fcAllItems.removeChild(item);
    // })
}














{/* <div class="fc-item">
                    <i class="fa-solid fa-minus"></i>
                    <p style="border: 1px solid red;"></p>
                    <span class="fc-item-question"></span>
                    <span class="fc-item-answer"></span>
</div> */}