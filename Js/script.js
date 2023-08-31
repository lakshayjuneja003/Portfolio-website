// typing animination 
var typed = new Typed(".Typing",{
    strings:["","Web Designer", "Full Stack Devolper","Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
// Aside 
const nav = document.querySelector(".Nav"),
            navList = nav.querySelectorAll("li"),
            totalNavList = navList.length,
            allSection = document.querySelectorAll(".Section"),
            totalSection = allSection.length
for(let i = 0; i<totalNavList; i++){
    const a = navList[i].querySelector("a")
    a.addEventListener("click",function()
    {
        for(let i = 0; i<totalSection;i++)
        {
            allSection[i].classList.remove("Active")
        }
        for(let j = 0; j<totalNavList ; j++)
        {
            if(navList[j].querySelector("a").classList.contains("Active"))
            {
            //    console.log( "back-section",navList[i].querySelector("a"))
            allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("Active")
        }   
        this.classList.add("Active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
        asideSectionTogglerBtn();
        }
    })
}
function showSection(element)
{
    for(let i = 0; i<totalSection;i++){
        allSection[i].classList.remove("Active")
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("Active")
}

const navTogglerBtn = document.querySelector(".Nav-toggler"),
aside = document.querySelector(".Aside")
navTogglerBtn.addEventListener("click",()=>
{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open")
    for(let i = 0; i<totalSection; i++)
    {
       allSection[i].classList.toggle("open")
    }
}
