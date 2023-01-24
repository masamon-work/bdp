// var element = document.querySelector("header");
// var button = document.querySelector("");
var x = 0; //viewクラスの付与状況

// button.addEventListener("click",function(){
//     if (x === 0){
//         element.classList.add("view");
//         x = 1;
//     } else { //opは0じゃない、op===1
//         element.classList.remove("view");
//         x = 0;
//     }
// });

setInterval(function(){
    if (x === 0){
        element.classList.add("view");
        x = 1;
    } else { //opは0じゃない、op===1
        element.classList.remove("view");
        x = 0;
    }
},2000);

var x =document.querySelector(".back");

function(){}

x.classList.add("A")
x.classList.remove("A")
x.classList.add("B")
x.classList.remove("B")