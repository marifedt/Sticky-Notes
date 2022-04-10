const hexNumbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
const hex1 = document.querySelector("#hex1");
const hex2 = document.querySelector("#hex2");
const btn = document.querySelector(".btn");
const changeHex = function() {
    var hexcode1 = "";
    var hexcode2 = "";
    var rndIndex = 0;
    for (let i = 0; i < 6; i++) {
        rndIndex = Math.floor(Math.random() * hexNumbers.length);
        hexcode1+=hexNumbers[rndIndex];
        rndIndex = Math.floor(Math.random()*hexNumbers.length);
        hexcode2+=hexNumbers[rndIndex];
    }

    document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
    hex1.innerHTML=hexcode1;
    hex2.innerHTML=hexcode2;
    
}
btn.addEventListener('click', changeHex);

