const slider = document.querySelector("#slider");
let sliderSection=document.querySelectorAll(".slider__section");
let sliderSectionLast=sliderSection[sliderSection.length -1];

const btnLeft=document.querySelector("#btn--left");
const btnRight=document.querySelector("#btn--right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast); //Colocar la ultima imagen al principio del slider

function MoverDerecha(){
    let sliderSectionFirst=document.querySelectorAll(".slider__section")[0];
    slider.style.marginleft="-200%";
    slider.style.transition="all 0.5s";
setTimeout(function(){
    slider.style.transition="none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginleft="-100%";
},500);
}

function MoverIzquierda(){
    let sliderSection=document.querySelectorAll(".slider__section");
    let sliderSectionLast=sliderSection[sliderSection.length -1];
    slider.style.marginleft="0";
    slider.style.transition="all 0.5s";
setTimeout(function(){
  
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginleft="-100%";
},500);
}

btnRight.addEventListener('click',function(){
    MoverDerecha();
});

btnLeft.addEventListener('click',function(){
    MoverIzquierda();
});

setInterval(function(){
    MoverDerecha();
},10000);

