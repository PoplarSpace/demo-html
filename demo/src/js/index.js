let inner=document.querySelector(".inner");
console.log(inner);
let context=document.querySelector(".input");
console.log(context);
let btn=document.querySelector(".queren");
btn.onclick=function(){
    console.log(context.value);
}