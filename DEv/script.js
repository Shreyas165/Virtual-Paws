console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let winFlag=false;

//function to change turn
const changeTurn=()=>{
    return turn === "X"?"0":"X";
}

//function to check win
const checkWin=()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    let win=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,-45],
    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText)&& (boxtext[e[0]].innerText)!==""){
            document.querySelector(".info").innerText=boxtext[e[0]].innerText + " Won";
            winFlag=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
            
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width="20vw";
        }

    })
}

//game logic
//music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",(e)=>{
        if (boxtext.innerText === ""){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!winFlag){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }
    })
    })

    //add event listener for reset button
   let reset = document.getElementById("reset");
    reset.addEventListener("click",()=>{
        let boxtext=document.querySelectorAll(".boxtext");
        Array.from(boxtext).forEach(e=>{
            e.innerText=" ";
        })
        turn="X";
        document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
        winFlag=false;
        document.getElementsByClassName("imgbox")[0].getElementsByTagName("img")[0].style.width ="0";
        document.querySelector(".line").style.width="0";
    })
