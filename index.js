console.log("welcome to tic tac toe");
// let music = new Audio("music.mp3")
// let audioturn = new Audio("music.mp3")
// let gameoveraudio = new Audio("music.mp3")
let turn = "X";
let gameover = false;


//function to change the turn
const changeTurn = () => {
    // return turn === "X"? "0": "X";
    if (turn === "X") {
        return turn = "0";
    }
    else {
        return turn = "X";
    }
}

//function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            document.querySelector('.imgbox img').style.display = "block";
            gameover = true

        }
    })
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            changeTurn();
            // audioturn.play()
            checkWin();
            if (!gameover) {

                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//reset button
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    // console.log(boxtext)
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox img').style.display = "none";
})