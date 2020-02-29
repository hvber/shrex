var checked=0;
var checked2=0;

var property = document.querySelector('.meme-btn');
var property2 = document.querySelector('.meme-btn2');
function setColor(){
    if(checked == 1){
        property.style.color="white";
        checked = 0;
    } 
    else{
        property.style.color="red";
        property2.style.color="white";
        checked = 1;
        checked2 = 0;
    }
}
function setColor2(){
    if(checked2 == 1){
        property2.style.color="white";
        checked2 = 0;
    } 
    else{
        property2.style.color="red";
        checked = 0;
        property.style.color="white";
        checked2 = 1;
    }
}