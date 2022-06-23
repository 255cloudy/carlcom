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
class Carousel {
    constructor(carouselNode) {
        this.currItem = 0;
        this.currTime = 0;
        this.itemSelected = 'carousel-item-selected'
        this.buttonSelected = 'carousel-button-selected'
        this.carouselImage = '.carousel-image'
        this.carousel = carouselNode
        this.items = this.carousel.querySelectorAll('.carousel-item');
        this.items.forEach(item=> {
            item.querySelector(this.carouselImage).classList.add('transparent')
        })
        this.items[this.currItem].querySelector(this.carouselImage).classList.add('opaque')
        this.btns = Array.from(this.items, () => {
            const node = document.createElement('span')
            node.classList.add('carousel-btn')
            console.log(node)
            return node
        })
        console.log(this.btns)
        let btnContainer = document.createElement('div')
        btnContainer.classList.add('carousel-nav')
        btnContainer.append(...this.btns)
        this.carousel.append(btnContainer)
        this.btns[this.currItem].classList.add(this.buttonSelected)
        this.btns.forEach((btn, index) => {
            console.log('setting listener')
            btn.addEventListener('click',()=> {
                this.timer = Date.now
                this.imageFade(index)
            })})
        this.timer = Date.now()
        setInterval(() => {
            console.log('fading')
            this.currItem === this.items.length-1 ? this.imageFade(0): this.imageFade(this.currItem+1)
        }, 4000)         
    }
    updateCarousel(index){
        this.btns[this.currItem].classList.remove(this.buttonSelected)
        this.btns[index].classList.add(this.buttonSelected)
        this.currItem = index
    }
    fadeAnimation(index){
        let fadeIn = [
            {background: 'red'},
            // {opacity: 1}
        ]
        let fadeInTiming = {
            fill: 'forwards',
            duration: 3000,
            iterations: 1,
        }
        console.log(this.items[index])
        this.items[index].animate(fadeIn, fadeInTiming)
        this.updateCarousel(index)
    }
    imageFade(index){
        // console.log(this.items[index].querySelector('.carousel-image'))
        // this.items[this.currItem].classList.add('transparent')
        this.items[this.currItem].querySelector('.carousel-image').classList.remove('opaque')
        this.items[index].querySelector('.carousel-image').classList.add('opaque')
        this.updateCarousel(index)
        console.log(this)
    }
}
document.querySelectorAll('.carousel').forEach( carousel => {
    let carouselObj  = new Carousel(carousel);
})
