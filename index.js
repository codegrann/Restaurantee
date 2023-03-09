let times = document.getElementById("times");
let toggle=document.querySelector(".line");
let nav=document.querySelector(".menu");
let links=document.querySelectorAll(".menu > li");
let submitForm=document.querySelector("#submit");


// HIDING AND SHOWING MENU BAR
toggle.addEventListener('click', show);
times.addEventListener('click', hide);
function show(){ 
    toggle.style.display='none';
    times.style.display = 'block'; 
    nav.style.display='block'; 
}
function hide(){
    nav.style.display='none';
    toggle.style.display='block';
    times.style.display='none';
}


// submitForm.style.color="black";
submitForm.addEventListener("click", prevent);
function prevent(el){
    el.preventDefault();
}