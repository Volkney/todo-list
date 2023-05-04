import _ from 'lodash';
import './css/reset.css';
import './css/style.css';
import setupBurgerButtonEventListeners from './tasks/side-menu';
import initHome from './DOM/home';
import Task from './logic/projects'

// Initialize the home page layout
const { header, body, footer } = initHome();

// Set up event listeners for the burger button and close button
const burgerBtn = document.querySelector('.burger-button');
const sideMenu = document.querySelector('.side-menu');
setupBurgerButtonEventListeners(burgerBtn, sideMenu);
