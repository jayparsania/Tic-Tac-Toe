let music = new Audio("music.mp3")
let turnSound = new Audio("ting.mp3")
let gameOverSound = new Audio("gameover.mp3")

let turn = "X";

let gameover = false

const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

const checkWin = () => {
    let boxText = document.getElementsByClassName("boxText")
    console.log(boxText)
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " : won "
            gameover = true
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px"
            document.querySelector(".line").style.width = "20vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`

        }
    })

}

// gamelogic

let boxes = document.getElementsByClassName("box");
console.log(boxes)
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener("click", () => {
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            turnSound.play()
            checkWin()
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            }
        }
    })
})

//reset       
                                         
reset.addEventListener("click", () => {
    let boxText = document.querySelectorAll(".boxText");
    console.log(boxText)
    boxText.forEach(element => {
        element.innerText = ""
    })  
    turn = "X";
    gameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px"
    document.querySelector(".line").style.width = "0vw"
})
