let bars = document.querySelector('.bars .ri-bar-chart-horizontal-line');
let close = document.querySelector('.bars .ri-close-large-fill');
let menu = document.querySelector('.side_bar');

bars.addEventListener('click' , () =>{
    menu.classList.toggle('show_sidebar');
});

close.addEventListener('click' , () =>{
    menu.classList.toggle('show_sidebar');
});