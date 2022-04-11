var images = document.getElementsByClassName("image");
var dots = document.getElementsByClassName("dot");
console.log(dots)
var ind = 0;
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const changeImage = function (step) {
    
    for (let i = 0; i < images.length; i++) {
        images[i].style.display="none";
        dots[i].classList.remove("active");
     }

    if(step===-1){
        if (ind===0) {
            ind=images.length-1
            images[ind].style.display="flex";
            dots[ind].classList.add("active");
        } else {
            ind--;
            images[ind].style.display="flex";
            dots[ind].classList.add("active");
        }
    } else{
        if (ind===(images.length-1)) {
            ind=0;
            images[ind].style.display="flex";
            dots[ind].classList.add("active");
        } else {
            ind++;
            images[ind].style.display="flex";
            dots[ind].classList.add("active");
        }
    }
    
}

prev.addEventListener('click',()=>{
    changeImage(-1);
})

next.addEventListener('click',()=>{
    changeImage(1);
})