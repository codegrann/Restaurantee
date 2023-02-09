let times = document.getElementById("times");
let toggle=document.querySelector(".line");



// toggle.style.backgroundColor='green';
// times.style.display = 'block';

toggle.addEventListener('click', show)
function show(){
    toggle.style.backgroundColor='green';
    times.style.display = 'block';  
}


