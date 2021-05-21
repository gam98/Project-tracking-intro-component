const menu_img = document.getElementById("menu_img");
const menu = document.querySelector(".menu");
menu_img.addEventListener("click", ()=> {
    menu.classList.toggle("menu--show");
})