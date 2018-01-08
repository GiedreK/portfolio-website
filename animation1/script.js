let hero = document.querySelector(".hero");

let moveButton = document.querySelector("#move");
let moveTo30Button = document.querySelector("#moveTo30");
let moveFrom30Button = document.querySelector("#moveFrom30");
let oneJumpButton = document.querySelector("#oneJump");
let jumpingButton = document.querySelector("#jumping");
let fadeButton = document.querySelector("#fade");
let glowButton = document.querySelector("#glow");
let fallDownButton = document.querySelector("#fallDown");
let shakeButton = document.querySelector("#shake");
let mirrorButton = document.querySelector("#mirror");
let moveTo0Button = document.querySelector("#moveTo0");


moveButton.addEventListener('click', move); 
function move() {
    hero.classList.toggle("move");
}

moveTo30Button.addEventListener('click', moveTo30); 
function moveTo30() {
    hero.classList.toggle("moveTo30");
}

moveFrom30Button.addEventListener('click', moveFrom30); 
function moveFrom30() {
    hero.classList.toggle("moveFrom30");
}

oneJumpButton.addEventListener('click', oneJump); 
function oneJump() {
    hero.classList.toggle("oneJump");
}

jumpingButton.addEventListener('click', jumping); 
function jumping() {
    hero.classList.add("jumping");
}


fadeButton.addEventListener('click', fade); 
function fade() {
    hero.classList.add("fade");
}

glowButton.addEventListener('click', glow); 
function glow() {
    hero.classList.add("glow");
}

fallDownButton.addEventListener('click', fallDown); 
function fallDown() {
    hero.classList.add("fallDown");
}

shakeButton.addEventListener('click', shake); 
function shake() {
    hero.classList.add("shake");
}

mirrorButton.addEventListener('click', mirror); 
function mirror() {
    hero.classList.add("mirror");
}


