const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.hamburger-menu');
const hl1 = document.querySelector('.hl1');
const hl2 = document.querySelector('.hl2');
const hl3 = document.querySelector('.hl3');

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    hl1.classList.toggle('active');
    hl2.classList.toggle('active');
    hl3.classList.toggle('active');
});

menu.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    hl1.classList.toggle('active');
    hl2.classList.toggle('active');
    hl3.classList.toggle('active');
});

document.querySelector('.meme-grade button').addEventListener('click', ()=>{
   document.querySelector('.meme-grade button').classList.toggle('active'); 
});