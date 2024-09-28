let btn = document.querySelector(".p-left");
let btn1 = document.querySelector(".p-right");
let image = document.querySelector('.outer');
btn.addEventListener("click", display);
btn1.addEventListener("click", display1);

let index =1;

function display()
{
   index--;
   if(index==0){
    index =10;
   } 
   image.style.background = `url("Pimage/${index}.jpg") center/cover fixed no-repeat`;
}

function display1()
{
    index++;
    if(index>10){
     index =1;
    } 
    image.style.background = `url("Pimage/${index}.jpg") center/cover fixed no-repeat`;
}
