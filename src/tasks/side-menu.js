import initHome from '../DOM/home';
import belowBtn from '../svg/belowBtn.svg'

export default function setupBurgerButtonEventListeners(burgerBtn, sideMenu) {
  burgerBtn.addEventListener('click', function() {
    sideMenu.style.transition = 'margin-left 0.3s ease-in-out'; 
    sideMenu.style.marginLeft = '0rem';
    burgerBtn.src = belowBtn;
  });

  const closeBtn = sideMenu.querySelector('.closeBtn');
  closeBtn.addEventListener('click', function() {
    sideMenu.style.transition = 'margin-left 0.3s ease-in-out'; 
    sideMenu.style.marginLeft = '-20rem';
  });
}
