// Toggle Style Switche ************************************

const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})

// Hide Style - switcher on scroll *************************

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.toggle("open")){
        document.querySelector(".style-switcher").classList.toggle("open")
    }
})

// Theme Colors ********************************************
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

// Light and Dark mode *************************************
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if(document.body.classList.toggle("dark")){
        dayNight.querySelector("i").classList.toggle("fa-sun")
    }
    else{
        dayNight.querySelector("i").classList.toggle("fa-moon")

    }
})