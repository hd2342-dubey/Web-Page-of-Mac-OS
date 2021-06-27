let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenue = document.getElementsByClassName("startmenue")[0]

taskbar.addEventListener("click", ()=>{
    if(startmenue.style.bottom == "50px"){
        startmenue.style.bottom = "-650px"
    }
    else{
        startmenue.style.bottom = "50px"
    }
})



























