const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const cancel = document.querySelector('.cancel');

menu.addEventListener('click', () => {
    menu.style.display = 'none';
    document.querySelector('.logo').style.display = 'none';

    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = 'flex';
    navMenu.style.flexDirection = 'column';
    navMenu.style.listStyle = 'none';
    navMenu.style.textDecoration = 'none';


})


menu.addEventListener('click', );
cancel.addEventListener('click', close);


function show() {
  navbar.style.display = 'flex';
}
