// Mobile menu starts here
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

// Mobile menu ends here

// Popup object
const popupObject = [
  {
    name: 'Tonic',
    subwork: ['CANOPY', 'Back end', '2015'],
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Ruby', 'Boostrap', 'GitHub'],
    button: 'see live',
    secodbutton: 'https://github.com/Brenda309/Personal-portfolio',
    image1: 'images/tonic.svg',
    cardClass: 'project-card',
  },
  {
    name: 'Multi-Post stories',
    subwork: ['Facebook', 'Back end', '2015'],
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Ruby', 'Boostrap', 'GitHub'],
    button: 'see live',
    secodbutton: 'https://github.com/Brenda309/Personal-portfolio',
    image1: './images/portfolio2.png',
    cardClass: 'projects-container project-card row-rev',
  },
  {
    name: 'Facebook 360',
    subwork: ['Facebook', 'Back end', '2015'],
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Ruby', 'Boostrap', 'GitHub'],
    button: 'see live',
    secodbutton: 'https://github.com/Brenda309/Personal-portfolio',
    image1: './images/portfolio3.png',
    cardClass: 'projects-container project-card',
  },
  {
    name: 'About Navigation',
    subwork: ['Uber', 'Back end', '2015'],
    description: 'A daily selection of privately personalized reads no accounts or sign-ups required',
    popupDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Ruby', 'Boostrap', 'GitHub'],
    button: 'see live',
    secodbutton: 'https://github.com/Brenda309/Personal-portfolio',
    image1: './images/portfolio4.png',
    cardClass: 'projects-container project-card',
  },
];

// Creating PopupWindow
let workSectionContainer;
let popupWindowCont;
function popupActive(h1, subworkli1, subworkli2, subworkli3, popupImg,
  descriptionT, technolist1, technolist2, technolist3, technolist4, technolist5,
  technolist6, githublink) {
  popupWindowCont = document.createElement('section');
  workSectionContainer.appendChild(popupWindowCont);
  popupWindowCont.className = 'popupWindowCont';
  popupWindowCont.innerHTML = `
    <div class="popupWindow">
      <img src="images/xicon.png" class="popupCloseicon">
      <h2 class="p-title">${h1}</h2>
      <ul class="subwork">
        <li>${subworkli1}</li>
        <li>${subworkli2}</li>
        <li>${subworkli3}</li>
      </ul>
      <img src="${popupImg}" class="featuredImage">
      <div id="infoCont">
        <p>${descriptionT}</p>
        <div id="lang-btn-cont">
          <ul class="languages">
            <li>${technolist1}</li>
            <li>${technolist2}</li>
            <li>${technolist3}</li>
            <li class="hidden-lists">${technolist4}</li>
            <li class="hidden-lists">${technolist5}</li>
            <li class="hidden-lists">${technolist6}</li>
          </ul>
          <hr id="popuphr">
          <div id="btn-Cont">
            <a href="" class="seeLive">See live<img src="images/livecode.png"></a>
            <a href="${githublink}" target="_blank" class="seeSrc">See source<img src="images/bluegithub.png"></a>
          </div>
        </div>
      </div>
    </div>
  `;
  const closePopup = document.querySelector('.popupCloseicon');
  closePopup.addEventListener('click', () => {
    workSectionContainer.removeChild(popupWindowCont);
  });
}
// Creating Main section dynamically
workSectionContainer = document.querySelector('.cards-container');
for (let i = 0; i < popupObject.length; i += 1) {
  const card = document.createElement('section');
  card.className = popupObject[i].cardClass;
  workSectionContainer.appendChild(card);
  card.innerHTML = `
  <div class="image">
    <img class="featuredImage" src="${popupObject[i].image1}">
  </div>
  <div class="background">
    <h2 class="p-title">${popupObject[i].name}</h2>
    <ul class="subwork">
      <li class="work1">${popupObject[i].subwork[0]}</li>
      <li>${popupObject[i].subwork[1]}</li>
      <li>${popupObject[i].subwork[2]}</li>
    </ul>
    <p class="about">${popupObject[i].description}</p>
    <ul class="languages">
      <li>${popupObject[i].technologies[0]}</li>
      <li>${popupObject[i].technologies[1]}</li>
      <li>${popupObject[i].technologies[2]}</li>
    </ul>
    <div class="btnDiv"></div>
  </div>
  `;
  const btn = document.createElement('button');
  const btnDiv = document.querySelectorAll('.btnDiv');
  btn.className = 'clickme';
  btnDiv.forEach((element) => {
    element.appendChild(btn);
  });
  btn.textContent = 'See Projects';
  btn.addEventListener('click', () => {
    popupActive(popupObject[i].name, popupObject[i].subwork[0], popupObject[i].subwork[1],
      popupObject[i].subwork[2], popupObject[i].image1, popupObject[i].description,
      popupObject[i].technologies[0], popupObject[i].technologies[1],
      popupObject[i].technologies[2], popupObject[i].technologies[3],
      popupObject[i].technologies[4], popupObject[i].technologies[5], popupObject[i].secodbutton);
  });
}