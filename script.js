var btn = document.getElementById("menu--btn")
btn.addEventListener("click",()=>{
    if(btn.innerHTML == "menu"){
        btn.innerHTML = "close"
        document.getElementsByClassName("sidenav")[0].style.display = "block"
    }
    else{
        btn.innerHTML = "menu"
        document.getElementsByClassName("sidenav")[0].style.display = "none"
    }
})