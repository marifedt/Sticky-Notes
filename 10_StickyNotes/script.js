const showNote = document.querySelector('.inputNote-container');
const input = document.querySelector('#inputText');
const allItems = document.querySelector('.allNotes');

//trying out multi keypresses
let keysPressed = {};
input.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
 
    if (keysPressed['Shift'] && event.key == 'Enter') { return; } 
    else if(event.key === 'Enter'){
        event.preventDefault();
        createNote();
    }
 });
 
 input.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
 });


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

function createNote() {
    var randomColor = getRandomColor();
    var noteDiv = document.createElement('div');
    var text = input.value;
    var newh4 = document.createElement('h4');
    newh4.className = 'noteText';
    newh4.innerHTML= text;
    input.value="";
    noteDiv.className = 'note';
    noteDiv.style.backgroundColor=randomColor;
    var rnd = randomNumber(7);
    var sign = randomNumber(2);
    if(sign === 0){ noteDiv.style.transform='rotate(-'+rnd+'deg)'}
    else{noteDiv.style.transform='rotate('+rnd+'deg)'}

    noteDiv.append(newh4);
    allItems.append(noteDiv);

    noteDiv.addEventListener('dblclick', (e)=>{
        
        noteDiv.remove();
    },false);
}