import initHome from '../DOM/home';
import belowBtn from '../svg/belowBtn.svg'
const { burgerBtn, sideMenu } = initHome();
export default function addBurgerButtonEventListener() {
    burgerBtn.addEventListener('click', function() {
      sideMenu.style.transition = 'margin-left 0.3s ease-in-out'; 
      sideMenu.style.marginLeft = '0rem';
      burgerBtn.src = belowBtn;
    });
  }

