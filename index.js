
const M_menu = document.getElementById("mobile-menu")
const M_menu_close = document.getElementById("menu-close")
const Burger = document.getElementById("burger")

var video1 = document.getElementById("video1");
var progress1 = document.getElementById("bar1");
const bar1btn = document.getElementById("bar1btn")

var video2 = document.getElementById("video2");
var progress2 = document.getElementById("bar2");
const bar2btn = document.getElementById("bar2btn")

var video3 = document.getElementById("video3");
var progress3 = document.getElementById("bar3");
const bar3btn = document.getElementById("bar3btn")

const Dbx707 = document.getElementById("dbx707");
const Db12 = document.getElementById("db12");
const Vegas = document.getElementById("vegas");
const Vegas_btn = document.getElementById("vegas-btn")
const Default_btn = document.getElementById("default-btn")

const Arrowl = document.getElementById("arrow-left");
const Arrowr = document.getElementById("arrow-right");

Burger.onclick = function open_menu(){
    M_menu.classList.add("animate-fade-down")
    M_menu.style.display="flex"
}

M_menu_close.onclick = function close(){
    M_menu.classList.remove("animate-fade-down")
    M_menu.style.display="none";
}

video1.addEventListener("timeupdate", function() {
    var percent = (video1.currentTime/video1.duration)*100;
    progress1.value = percent;
    if(percent==100){
        video1.style.display="none"
        Dbx707.style.display="none"
        Db12.style.display="block"
        video2.style.display="block"
        video1.currentTime=0
    }
});

video2.addEventListener("timeupdate", function() {
    var percent2 = (video2.currentTime/video2.duration)*100;
    progress2.value = percent2;
    if(percent2==100){
        video2.style.display="none"
        Db12.style.display="none"
        Default_btn.style.display="none"
        Vegas_btn.style.display="block"
        Vegas.style.display="block"
        video3.style.display="block"
        video2.currentTime=0
    }
});

video3.addEventListener("timeupdate", function() {
    var percent3 = (video3.currentTime/video3.duration)*100;
    progress3.value = percent3;
    if(percent3==100){
        video3.style.display="none"
        Vegas.style.display="none"
        Vegas_btn.style.display="none"
        Default_btn.style.display="block"
        video1.style.display="block"
        video1.style.display="block"
        video3.currentTime=0
    }
});

bar1btn.onclick = function btn1(){
    video1.style.display="block"
    video2.style.display="none"
    video3.style.display="none"
    video2.currentTime=0
    video3.currentTime=0
    Vegas.style.display="none"
    Vegas_btn.style.display="none"
    Default_btn.style.display="block"
    Db12.style.display="none"
    Dbx707.style.display="block"
}

bar2btn.onclick = function btn2(){
    video1.style.display="none"
    video2.style.display="block"
    video3.style.display="none"
    video1.currentTime=0
    video3.currentTime=0
    Vegas.style.display="none"
    Vegas_btn.style.display="none"
    Default_btn.style.display="block"
    Db12.style.display="block"
    Dbx707.style.display="none"
}

bar3btn.onclick = function btn3(){
    video1.style.display="none"
    video2.style.display="none"
    video3.style.display="block"
    video1.currentTime=0
    video2.currentTime=0
    Vegas.style.display="block"
    Vegas_btn.style.display="block"
    Default_btn.style.display="none"
    Db12.style.display="none"
    Dbx707.style.display="none"
}

Arrowl.onclick = function gol(){
    if(video2.style.display=="block"){
        video1.style.display="block"
        video2.style.display="none"
        video3.style.display="none"
        video2.currentTime=0
        video3.currentTime=0
        Vegas.style.display="none"
        Vegas_btn.style.display="none"
        Default_btn.style.display="block"
        Db12.style.display="none"
        Dbx707.style.display="block"
    }
    if(video3.style.display=="block"){
        video1.style.display="none"
        video2.style.display="block"
        video3.style.display="none"
        video1.currentTime=0
        video3.currentTime=0
        Vegas.style.display="none"
        Vegas_btn.style.display="none"
        Default_btn.style.display="block"
        Db12.style.display="block"
        Dbx707.style.display="none"
    }
}

Arrowr.onclick = function gor(){
    if(video2.style.display=="block"){
        video1.style.display="none"
        video2.style.display="none"
        video3.style.display="block"
        video1.currentTime=0
        video2.currentTime=0
        Vegas.style.display="block"
        Vegas_btn.style.display="block"
        Default_btn.style.display="none"
        Db12.style.display="none"
        Dbx707.style.display="none"
    }

    if(video1.style.display=="block"){
        video1.style.display="none"
        video2.style.display="block"
        video3.style.display="none"
        video1.currentTime=0
        video3.currentTime=0
        Vegas.style.display="none"
        Vegas_btn.style.display="none"
        Default_btn.style.display="block"
        Db12.style.display="block"
        Dbx707.style.display="none"
    }
}