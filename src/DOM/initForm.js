import Project from '../logic/projects';

export default function initForm(addProjectText, plusBtn, sideMenu) {
    
    if (addProjectText.textContent === 'add a project') {
      
      const form = document.createElement('form');
      const input = document.createElement('input');
      input.classList.add('input-project');
      const btnContainer = document.createElement('div');
      btnContainer.classList.add('btn-container');
      const addBtn = document.createElement('button');
      addBtn.classList.add('btn-project');
      addBtn.classList.add('add-btn');
      const cancelBtn = document.createElement('button');
      cancelBtn.classList.add('btn-project');
      input.type = 'text';
      input.placeholder = 'Enter project name';
      addBtn.textContent = 'Add';
      cancelBtn.textContent = 'Cancel';
      btnContainer.append(addBtn, cancelBtn);
      form.append(input, btnContainer);
      addProjectText.replaceWith(form);
      plusBtn.style.display = 'none';
      const projectDivContainer = document.createElement('div');
      projectDivContainer.classList.add('project-container');
      sideMenu.appendChild(projectDivContainer);
      addBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const projectName = input.value.trim();
        // create a new project with the name and add it to the project list
        const newProject = new Project(projectName);
        console.log(newProject.name);
        // code to add the project
        form.replaceWith(addProjectText);
        plusBtn.style.display = 'block';
        // add a new todo list object and add it to the task list
        const projectDisplay = document.createElement('div');
        projectDisplay.classList.add('project-display');
        projectDisplay.textContent = projectName;
        projectDivContainer.appendChild(projectDisplay);
        return newProject;
      });
      
      cancelBtn.addEventListener('click', (event) => {
        event.preventDefault();
        form.replaceWith(addProjectText);
        plusBtn.style.display = 'block';
      });
    }
  }