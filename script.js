let scrollContainer=document.querySelector(".gallery");
let backbtn=document.getElementById("back");
let nextbn=document.getElementById("forward");


nextbn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft +=900;
});
backbtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft-=900;
});