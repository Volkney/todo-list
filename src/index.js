import _ from 'lodash';
import './css/reset.css';
import './css/style.css';
import Pencil from './svg/todoIcon.svg';
import Burger from './svg/burgerBtn.svg';
import AddBtn from './svg/plus.svg';

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
 const taskList = document.createElement('div');
 taskList.classList.add('task-list');
 //side menu content
 sideMenu.innerHTML = `<ul class='menu'>
   <li class="all">All</li>
   <li class="today">Today</li>
   <li class="week">Week</li>
   <li class="projects">Projects
   </li>
 </ul>
 <div class='add-container'></div>`;
 const plusBtn = new Image();
 plusBtn.classList.add('plus-button');
 plusBtn.src = AddBtn;
 
 // append the plusBtn and the 'add-project' element to the side menu
 const addProject = sideMenu.querySelector('.add-container');
 const addProjectText = document.createElement('div');
 addProjectText.classList.add('add-project');
 addProjectText.textContent = 'add a project';
 addProject.append(plusBtn, addProjectText);
 
 sideMenu.appendChild(addProject);
 
 // append the side menu and the task list to the body
 body.append(sideMenu, taskList);
