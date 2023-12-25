
const M_menu = document.getElementById("mobile-menu")
const M_menu_close = document.getElementById("menu-close")
const Burger = document.getElementById("burger")

Burger.onclick = function open_menu(){
    M_menu.classList.add("animate-fade-down")
    M_menu.style.display="flex"
}

M_menu_close.onclick = function close(){
    M_menu.classList.remove("animate-fade-down")
    M_menu.style.display="none";
}



var video1 = document.getElementById("video1");
var progress1 = document.getElementById("bar1");

var video2 = document.getElementById("video2");
var progress2 = document.getElementById("bar2");

var video3 = document.getElementById("video3");
var progress3 = document.getElementById("bar3");


video1.addEventListener("timeupdate", function() {
    var percent = (video1.currentTime / video1.duration) * 100;
    progress1.value = percent;
});

