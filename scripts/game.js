let enabledSystemSound = true

const music = new Audio() 

music.src=""

music.play()

function handleSound() {

const soundButton=document.getElementById("btn-sound")

if(enabledSystemSound) {

enabledSystemSound =false

} else {

enabledSystemSound = true

}

}

const board = []

function loadGame() {
    board.push("start")

    for (let i = 2; i <= 99; i++) {
        const randomPath = Math.floor(Math.random() * 2)

        board.push(randomPath)

        const element = document.getElementById("path-" + i)
        console.log(element)
        if (randomPath === 0) {
            element.style.backgroundImage = "url('./assests/tiles/path_free.png')";
        } else {
            element.style.backgroundImage = "url('./assests/tiles/path_blocked.png')";

        }
    }

}
loadGame()