const userInput = document.querySelector("#userInput");
const erase = document.querySelector("#erase");
const allItems = document.querySelector(".allItems");
var number=0;

function updateList(idname){
if(idname.style.textDecoration=="line-through"){
    idname.style.textDecoration="none";
}else{
    idname.style.textDecoration="line-through";
}
}

function createList(input){
let newList = document.createElement("span");
newList.classList.add("list");
let idname = "list" + number;
number++;
console.log(idname);
newList.setAttribute("id", idname);
newList.setAttribute("onclick","updateList("+ idname+")");
newList.innerText = "- " + input;
userInput.value="";
allItems.appendChild(newList);
}

userInput.addEventListener('keypress',(event)=>{
    const keyName = event.key;

    if(keyName === 'Enter'){
     return userInput.value == "" ? null : createList(userInput.value);
    }
},false)

erase.addEventListener('click',()=>{
number=0;
allItems.innerHTML ="";
},false);

