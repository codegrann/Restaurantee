let times = document.getElementById("times");
let toggle=document.querySelector(".line");
let nav=document.querySelector(".menu");
let links=document.querySelectorAll(".menu > li");


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


