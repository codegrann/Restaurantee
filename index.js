let times = document.getElementById("times");
let toggle=document.querySelector(".line");
let nav=document.querySelector(".menu");
let links=document.querySelectorAll(".menu > li");



// toggle.style.backgroundColor='green';
// times.style.display = 'block';

toggle.addEventListener('click', show)
function show(){ 
    toggle.style.display='none';
    times.style.display = 'block'; 
    nav.style.display='block';
    // nav.style.position='absolute';
    // nav.style.top='1rem';
    // nav.style.left='77vw';
    // nav.style.marginRight='0.5rem';
    // nav.style.backgroundColor='grey';
    // nav.style.paddingLeft='1rem';
    // links.style.marginBottom='2rem';
    // links.style.fontSize='30pt';
}


