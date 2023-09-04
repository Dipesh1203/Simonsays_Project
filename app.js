let gameSeq=[];
let userSeq=[];
let h2 = document.querySelector("h2");

let btns = ["yellow","green","purple","red"];

let started =false;
let level = 0;
document.addEventListener("keypress",function () {
   if(started==false){
        console.log("game is started");
        started=true;
        
        levelUp();
   }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },200);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function (){
        btn.classList.remove("userFlash");
    },100);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerHTML=`Game over! your score was <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}
function btnPress(){
    console.log(this);
    let btn =this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}