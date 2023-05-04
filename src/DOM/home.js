import Pencil from '../svg/todoIcon.svg';
import Burger from '../svg/burgerBtn.svg';
import AddBtn from '../svg/plus.svg';
import initForm from './initForm';
export default function initHome() {
    //get layout div
    const test = 'hello';
    const header = document.querySelector('.header');
    const body = document.querySelector('.main');
    const footer = document.querySelector('.footer');
    const todoTemplate = document.querySelector('#todo-template');
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
      <li class="closeBtn"></li>
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
    // prompt form when add project button is pressed
    if (addProjectText) {
      addProjectText.addEventListener('click', () => {
        initForm(addProjectText, plusBtn, sideMenu);
      });
    }
    addProject.append(plusBtn, addProjectText);
    sideMenu.appendChild(addProject);
    // append the side menu and the task list to the body
    body.append(sideMenu, taskList);
    
    return { header, body, footer, test};
  }
