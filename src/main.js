const burger = document.querySelector("#burger")
const slide = document.querySelector("#nav-slide")
const subSlide = document.querySelector("#menu-sub-slide")
const menu = document.querySelector('#menu')
const subMenu = document.querySelector('#sub-menu')
const body = document.querySelector('#body')
const nest1 = document.querySelector('#nest1')

let arrowsArray = []
const height = ["h-72", "h-24", "h-5", "h-5"]
const nestArray = []


for (let index = 1; index < 5; index++) {
    arrowsArray.push(document.querySelector(`#arrow${index}`))
    nestArray.push(document.querySelector(`#nest${index}`))
    
}

arrowsArray.forEach(element => {

    element.addEventListener('click', enabaleList)
});

function enabaleList(evt) {
   // e = event.target
    var i = arrowsArray.indexOf(this)
    if (nestArray[i].classList.contains('opacity-0')) {
        nestArray[i].classList.remove('opacity-0')
        nestArray[i].classList.remove('h-0')
        nestArray[i].classList.add('h-72')
    } else {
        nestArray[i].classList.remove('h-72')
        nestArray[i].classList.add('opacity-0')
        nestArray[i].classList.add('h-0')
    }
}

//enableScroll()
burger.addEventListener('click', () => {
    if (slide.classList.contains('translate-x-full')) {
        slide.classList.remove('translate-x-full')
        body.classList.add("overflow-y-hidden")

        //disableScroll()
    } else {
        slide.classList.add('translate-x-full')
        body.classList.remove("overflow-y-hidden")
        //enableScroll()
        if (!subSlide.classList.contains('translate-x-full')) {
            subSlide.classList.add('translate-x-full') 
            body.classList.remove("overflow-y-hidden")
            //enableScroll()
        }
    }
})

menu.addEventListener('click', () => {
    if (subSlide.classList.contains('translate-x-full')) {
        subSlide.classList.remove('translate-x-full')  
    } 
})

subMenu.addEventListener('click', () =>{
    subSlide.classList.add('translate-x-full')
})


// var keys = {37: 1, 38: 1, 39: 1, 40: 1};

// function preventDefault(e) {
//   e.preventDefault();
// }

// function preventDefaultForScrollKeys(e) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }

// // modern Chrome requires { passive: false } when adding event
// var supportsPassive = false;
// try {
//   window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
//     get: function () { supportsPassive = true; } 
//   }));
// } catch(e) {}

// var wheelOpt = supportsPassive ? { passive: false } : false;
// var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// // call this to Disable
// function disableScroll() {
//   window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
//   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
//   window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
//   window.addEventListener('keydown', preventDefaultForScrollKeys, false);
// }

// // call this to Enable
// function enableScroll() {
//   window.removeEventListener('DOMMouseScroll', preventDefault, false);
//   window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
//   window.removeEventListener('touchmove', preventDefault, wheelOpt);
//   window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
// }