let gameseq = [];
let userseq = [];

let btns = ["red", "yellow", "green", "purple"];


let started = false; 
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("game started");
        started = true;
        levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4); 
    let randClass = btns[randIdx];
    let randbtn = document.querySelector(`.${randClass}`);

    gameseq.push(randClass);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkAns(idx){
   if(userseq[idx]== gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML = `game over! your score was <b>${level} </b> <br> Press any Key to Start Again`;
        reset();
    }
    
}
function btnpress(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}






        
        

