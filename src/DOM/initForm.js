import Project from '../logic/projects';
export default function initForm(addProjectText) {
    const counter = 0;
    if (addProjectText.textContent === 'add a project') {
      const form = document.createElement('form');
      const input = document.createElement('input');
      const addBtn = document.createElement('button');
      const cancelBtn = document.createElement('button');
      input.type = 'text';
      input.placeholder = 'Enter project name';
      addBtn.textContent = 'Add';
      cancelBtn.textContent = 'Cancel';
      form.append(input, addBtn, cancelBtn);
      addProjectText.replaceWith(form);
  
      addBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const projectName = input.value.trim();
        // create a new project with the name and add it to the project list
        const newProject = new Project(projectName);
        console.log(newProject.name);
        // code to add the project
        form.replaceWith(addProjectText);
      });
  
      cancelBtn.addEventListener('click', (event) => {
        event.preventDefault();
        form.replaceWith(addProjectText);
      });
      return projectName;
    }
  }