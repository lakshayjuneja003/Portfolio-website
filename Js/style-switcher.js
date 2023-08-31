const StyleswitcherToggler = document.querySelector(".Style-switcher-toggler")
StyleswitcherToggler.addEventListener('click',()=>{
    document.querySelector(".Style-switcher").classList.toggle("open")
})
// hide style switcher on scroll
window.addEventListener('scroll',()=>{
    if(document.querySelector(".Style-switcher").classList.contains("open")){
        document.querySelector(".Style-switcher").classList.remove("open")
    }
})
// theme colors
const alternateStyles = document.querySelectorAll(".Alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if(color === style.getAttribute('title'))
        {
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute('disabled','true')
        }
    })
}
// theme light an dadrk mode
const dayNight = document.querySelector(".Day-night")
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon")

    }
})