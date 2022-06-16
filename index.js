let menuTriggerd = false;
const menuTrigger = document.querySelector('.menu-btn');
const mainNav = document.getElementById('main-nav');
const header = document.getElementsByTagName('header')[0];
const logo = document.querySelector('.logo');
const intro = document.querySelector('.intro');
const navItems = document.querySelectorAll('.list-item');
const closeIcon = document.querySelector('.close-icon');

menuTrigger.addEventListener('click', showMenu);
closeIcon.addEventListener('click', hideMenu);


function hideMenu() {
    header.classList.remove('header-mobile');
    mainNav.classList.remove("flex-mobile");
    logo.classList.remove("logo-mobile");
    intro.classList.remove("intro-mobile");
    navItems.forEach(node => {
        node.classList.remove('list-item-mobile');
    });
    menuTrigger.classList.remove('logo-hidden');
    closeIcon.classList.remove('close-icon-open');
}

function showMenu(){
    menuTriggered = true;
    // console.log("trigger clicked");
    header.classList.add('header-mobile');
    mainNav.classList.add("flex-mobile");
    logo.classList.add("logo-mobile");
    intro.classList.add("intro-mobile");
    navItems.forEach(node => {
        node.classList.add('list-item-mobile');
    });
    menuTrigger.classList.add('logo-hidden');
    closeIcon.classList.add('close-icon-open');
}