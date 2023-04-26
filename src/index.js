import _ from 'lodash';
import './reset.css';
import './style.css';
import Pencil from './todoIcon.svg';
import Burger from './burgerBtn.svg';
/* import Radio from './radio-btn.png'; */
//get layout div
const header = document.querySelector('.header');
const body = document.querySelector('.main');
const footer = document.querySelector('.footer');
//get children of header
const upperHeader = document.querySelector('.upper-header');
const bottomHeader = document.querySelector('.bottom-header');
//add logo svg to upper header
const logoImage = new Image();
logoImage.src = Pencil;
const logo = document.createElement('div');
logo.classList.add('logo');
logo.appendChild(logoImage);
upperHeader.appendChild(logo);
//add text to bottom header
const burgerBtn = new Image();
burgerBtn.src = Burger;
burgerBtn.classList.add('burger-button');
const todoText = document.createElement('div');
todoText.classList.add('todo-text');
todoText.textContent = 'todo list';
bottomHeader.append(burgerBtn, todoText);
//main children
const sideMenu = document.createElement('div');
sideMenu.classList.add('side-menu');
