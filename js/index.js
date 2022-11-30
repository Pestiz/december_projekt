let menu = document.querySelector('#menu_bars');
let navBar = document.querySelector('.nav_bar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove('active');
}


let searchIcon = document.querySelector('#search_icon');
let searchForm = document.querySelector('.search_form');

searchIcon.onclick = () =>{
    searchIcon.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove('active');
}