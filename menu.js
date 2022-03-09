const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
menu.addEventListener('click', () => {
  menu.style.display = 'none';
  document.querySelector('.logo').style.display = 'none';
  const navMenu = document.querySelector('.nav-menu');
  const listItems = document.getElementById('list-items');
  navMenu.style.display = 'flex';
  navMenu.style.flexDirection = 'column';
  navMenu.style.listStyle = 'none';
  navMenu.style.textDecoration = 'none';

  navMenu.classList.add('menu-item-style');
  listItems.classList.add('list-items');
});

navMenu.addEventListener('click', () => {
  document.querySelector('.nav-menu').style.display = 'none';
  document.querySelector('.logo').style.display = 'flex';
  menu.style.display = 'flex';
});

//for the mobile & desktop popup window//
const popupButton = document.querySelector('.clickme');
const popupWindow = document.querySelector('.popup-window');
//Add event listener.
popupButton.addEventListener("click", popOutNow);

function popOutNow(e) {
  e.preventDefault();
  document.querySelector(".popup-window").style.display = "flex";
  popupWindow.classList.toggle("popup");
}

//cancel button//
const cancelPop = document.querySelector(".close");
cancelPop.addEventListener("click", cancelPopout);
function cancelPopout(e) {
  e.preventDefault();
  document.querySelector(".popup-window").style.display = "none"
}
