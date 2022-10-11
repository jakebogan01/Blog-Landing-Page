const open_close=document.querySelector(".open-close")
const dropdown=document.querySelectorAll(".menu")

open_close.addEventListener("click",(event)=>{
    event.currentTarget.children[0].classList.toggle("open-hide");
    event.currentTarget.children[1].classList.toggle("close-show");
    document.querySelector(".navbar .container nav").classList.toggle("show-nav");
})

dropdown.forEach((element)=>{
    element.addEventListener("click",(event)=>{
        if(document.querySelectorAll(".show-dropdown").length==1){
            if(!event.currentTarget.children[1].classList.contains("show-dropdown")){
                document.querySelector(".show-dropdown").classList.remove("show-dropdown");
                document.querySelector(".header-opacity").classList.remove("header-opacity");
                document.querySelector(".rotate-arrow").classList.remove("rotate-arrow");
            }
        }
        event.currentTarget.children[1].classList.toggle("show-dropdown");
        event.currentTarget.children[0].children[0].classList.toggle("header-opacity");
        event.currentTarget.children[0].children[2].classList.toggle("rotate-arrow");
    })
})