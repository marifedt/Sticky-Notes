// Nav Buttons
const btnAdd = document.querySelector("#btnAdd");
// const btnSave = document.querySelector("#btnSave");

const showNote = document.querySelector('.inputNote-container');
const input = document.querySelector('#inputText');
const allItems = document.querySelector('.allNotes');

//Array for storing notes
const notesArr = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];

//Event Listeners
btnAdd.addEventListener('click', ()=>{openNote()});
// btnSave.addEventListener('click', ()=>saveNote());

//trying out multi keypresses
let keysPressed = {};
input.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
    let content = input.value;
    content.trim();
    if (keysPressed['Shift'] && event.key == 'Enter') { return; } 
    else if(event.key === 'Enter'){
        if(content != ""){
            event.preventDefault();
            notesArr.push(input.value);
            saveNote(input.value);
            createNote(input.value);
        } else
            return;
        
    }
 });
 
 input.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
 });

// Functions
function saveNote(note){
    localStorage.setItem("notes", JSON.stringify(notesArr));
    location.reload();
}

function randomNumber(limit){
    return Math.floor(Math.random()*limit);
}

function getRandomColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function openNote() {
   showNote.style.visibility="visible";
}

function closeNote() {
    showNote.style.visibility="hidden";
}

function displayNotes(){
    if(notesArr.length > 0){
        for (let i = 0; i < notesArr.length; i++) {
            createNote(notesArr[i])
        }
    }
}

function createNote(note) {
    var randomColor = getRandomColor();
    var noteDiv = document.createElement('div');
    var newh4 = document.createElement('h4');
    newh4.className = 'noteText';
    newh4.innerHTML= note;
    input.value="";
    noteDiv.className = 'note';
    noteDiv.style.backgroundColor=randomColor;
    var rnd = randomNumber(7);
    var sign = randomNumber(2);
    if(sign === 0){ noteDiv.style.transform='rotate(-'+rnd+'deg)'}
    else{noteDiv.style.transform='rotate('+rnd+'deg)'}

    noteDiv.append(newh4);
    allItems.append(noteDiv);

    setRemoveListeners();
}

function deleteNote(i){
    
    notesArr.splice(i,1);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    location.reload();
}

function setRemoveListeners(){
    let allNotes = document.querySelectorAll(".note");
    
    console.log(allNotes);
    allNotes.forEach((note, i) => {
        note.addEventListener("dblclick", ()=>{
            deleteNote(i);
            note.remove();
        })
    });
}

window.onload = function(){
    displayNotes();
}