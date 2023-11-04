const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById("nextBtn");
let counter = 0;
let len = slides.length - 1;

let slider = document.querySelector(".slider");

slides.forEach((slide, index)=>{
    slide.style.left = index * 100  + "%";

});
let timer = 3000;



    
setInterval(()=>{
        if(counter === len){
            counter = 0;
            slides.forEach((slide, index)=>{
                slide.style.transform = `translateX(-${counter * 100}%)`
            });
        }
        else{
            counter++;
            slides.forEach((slide, index)=>{
                slide.style.transform = `translateX(-${counter * 100}%)`
            });
        }
    }, timer);



nextBtn.addEventListener('click', ()=>{
    if(counter === len){
        counter = 0;
        slides.forEach((slide, index)=>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        });
    }
    else{
        counter++;
        slides.forEach((slide, index)=>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        });
    }

    
});


///////////////////////////////////////////////////



