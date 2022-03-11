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

// Creating Main section dynamically
const workSectionContainer = document.querySelector('.cards-container');
for (let i = 0; i < 4; i += 1) {
  const card = document.createElement('section');
  card.className = popupObject[i].cardClass;
  const cardSection = document.createElement('div');
  cardSection.className = 'image';
  workSectionContainer.appendChild(card);
  card.appendChild(cardSection);
  const featuredImage = document.createElement('img');
  featuredImage.className = 'featuredImage';
  featuredImage.src = popupObject[i].image1;
  cardSection.appendChild(featuredImage);
  const bgdiv = document.createElement('div');
  bgdiv.className = 'background';
  card.appendChild(bgdiv);
  const h2 = document.createElement('h2');
  h2.className = 'p-title';
  h2.textContent = popupObject[i].name;
  bgdiv.appendChild(h2);
  const bgdivUl = document.createElement('ul');
  bgdivUl.className = 'subwork';
  bgdiv.appendChild(bgdivUl);
  const bgdivUlLi1 = document.createElement('li');
  const bgdivUlLi2 = document.createElement('li');
  const bgdivUlLi3 = document.createElement('li');
  bgdivUl.append(bgdivUlLi1, bgdivUlLi2, bgdivUlLi3);
  bgdivUlLi1.className = 'work1';
  const subwork1index = popupObject[i].subwork[0];
  const subwork2index = popupObject[i].subwork[1];
  const subwork3index = popupObject[i].subwork[2];
  bgdivUlLi1.textContent = subwork1index;
  bgdivUlLi2.textContent = subwork2index;
  bgdivUlLi3.textContent = subwork3index;
  const bgdivP = document.createElement('p');
  bgdivP.textContent = popupObject[i].description;
  bgdiv.appendChild(bgdivP);
  bgdivP.className = 'about';
  const languagesUl = document.createElement('ul');
  languagesUl.className = 'languages';
  bgdiv.appendChild(languagesUl);
  const languagesUlLi1 = document.createElement('li');
  const technologiesindex1 = popupObject[i].technologies[0];
  languagesUlLi1.textContent = technologiesindex1;
  const languagesUlLi2 = document.createElement('li');
  const technologiesindex2 = popupObject[i].technologies[1];
  languagesUlLi2.textContent = technologiesindex2;
  const languagesUlLi3 = document.createElement('li');
  const technologiesindex3 = popupObject[i].technologies[2];
  languagesUlLi3.textContent = technologiesindex3;

  const languagesUlLi4 = document.createElement('li');
  const languagesUlLi5index1 = popupObject[i].technologies[3];
  languagesUlLi4.textContent = languagesUlLi5index1;
  const languagesUlLi5 = document.createElement('li');
  const languagesUlLi5index2 = popupObject[i].technologies[4];
  languagesUlLi5.textContent = languagesUlLi5index2;
  const languagesUlLi6 = document.createElement('li');
  const languagesUlLi6index3 = popupObject[i].technologies[5];
  languagesUlLi6.textContent = languagesUlLi6index3;
  languagesUl.append(languagesUlLi1, languagesUlLi2, languagesUlLi3);
  languagesUl.append(languagesUlLi4, languagesUlLi5, languagesUlLi6);
  languagesUlLi4.style.display = 'none';
  languagesUlLi5.style.display = 'none';
  languagesUlLi6.style.display = 'none';
  const btnDiv = document.createElement('div');
  bgdiv.appendChild(btnDiv);
  const btn = document.createElement('button');
  btn.className = 'clickme';
  btnDiv.appendChild(btn);
  btn.textContent = 'See Projects';
  btn.addEventListener('click', () => {
    if (window.screen.width > 992) {
      languagesUlLi4.style.display = 'inline';
      languagesUlLi5.style.display = 'inline';
      languagesUlLi6.style.display = 'inline';
    }
    const popupWindowMainCont = document.createElement('section');
    workSectionContainer.appendChild(popupWindowMainCont);
    popupWindowMainCont.className = 'popupWindowCont';
    const popupwindow = document.createElement('section');
    popupWindowMainCont.appendChild(popupwindow);
    popupwindow.className = 'popupWindow';
    const closeIcon = document.createElement('img');
    closeIcon.src = 'images/xIcon.svg';
    closeIcon.style.float = 'right';
    popupwindow.appendChild(closeIcon);
    closeIcon.addEventListener('click', () => {
      languagesUlLi4.style.display = 'none';
      languagesUlLi5.style.display = 'none';
      languagesUlLi6.style.display = 'none';
      popupWindowMainCont.style.display = 'none';
      bgdiv.appendChild(h2);
      bgdiv.appendChild(bgdivUl);
      cardSection.appendChild(featuredImage);
      bgdiv.appendChild(bgdivP);
      bgdivP.textContent = popupObject[i].description;
      bgdiv.appendChild(languagesUl);
      bgdiv.appendChild(btn);
      btn.style.width = '130px';
      languagesUl.style.marginBottom = '0';
    });
    popupwindow.appendChild(h2);
    popupwindow.appendChild(bgdivUl);
    popupwindow.appendChild(featuredImage);
    const pDivider = document.createElement('div');
    pDivider.className = 'pDivider';
    popupwindow.appendChild(pDivider);
    pDivider.appendChild(bgdivP);
    bgdivP.textContent = popupObject[i].popupDescription;
    const techDiv = document.createElement('div');
    techDiv.className = 'techDiv';
    pDivider.appendChild(techDiv);
    techDiv.appendChild(languagesUl);
    const popupbtn1 = document.createElement('a');
    const popupbtn2 = document.createElement('a');
    const popupbtnDiv = document.createElement('div');
    techDiv.appendChild(popupbtnDiv);
    popupbtn1.className = 'popupClickme1';
    popupbtn2.className = 'popupClickme2';
    popupbtn1.textContent = 'See live';
    popupbtn2.textContent = 'See source';
    const icon1 = document.createElement('img');
    const icon2 = document.createElement('img');
    icon2.src = 'images/githubinbutton.svg';
    popupbtn2.appendChild(icon2);
    icon1.src = 'images/roundShape.png';
    icon1.style.marginBottom = '-3px';
    icon2.style.margin = '0 5px -3px 6px';
    icon1.style.margin = '0 5px -3px 6px';
    popupbtn1.appendChild(icon1);
    popupbtn2.href = popupObject[i].secodbutton;
    popupbtnDiv.append(popupbtn1, popupbtn2);
    const hr = document.createElement('hr');
    hr.className = 'hr';
    techDiv.insertBefore(hr, popupbtnDiv);
    hr.style.color = '#ebecf0';
    popupbtnDiv.className = 'popupBtnDiv';
    languagesUl.style.marginBottom = '20px';
  });
}

// form validation//
const form = document.querySelector('#contact');
const email = document.querySelector('#mail');
const invalidError = document.querySelector('#invalidError');

form.addEventListener('btn', (e) => {
  const emailText = email.value;
  if (emailText !== emailText.toLowerCase()) {
    e.preventDefault();
    invalidError.style.color = 'red';
    invalidError.textContent = 'Please enter your email in lowercase';
  } else {
    invalidError.textContent = '';
  }
});