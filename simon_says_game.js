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





// body{
//     text-align: center;
// }
// .btn{
//     height: 200px;
//     width: 200px;
//     border: 10px solid black;
//     border-radius: 20%;
//     margin:  30px;
// }

// #btn-container{
//     display: flex;
//     justify-content: center;
// }

// .red{
//     background-color: rgb(203, 98, 128);
// }
// .yellow{
//     background-color: rgb(237, 159, 86);
// }
// .green{
//     background-color: rgb(115, 168, 190);
// }
// .purple{
//     background-color: rgb(135, 158, 243);
// }

// .flash{
//     background-color: white;
// }

// .userflash{
//     background-color: white;
// }




// <!DOCTYPE html>
// <html lang="en">z
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Simon Says Game</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <h1>Simon Says Game</h1>
//     <h2>Press Any Key to Start the Game</h2>

//     <div id="btn-container">
//         <div class="line-one">
//             <div class="btn red "  type = "button" id="red" >1</div>
//             <div class="btn  yellow"  type = "button" id="yellow">2</div>

//         </div>

//         <div class="line-two">
//             <div class="btn green"   type = "button" id="green">3</div>
//             <div class="btn purple"   type = "button" id="purple">4</div>
//         </div>
        
        
//     </div>
    
//     <script src="new.js"></script>
// </body>
// </html>