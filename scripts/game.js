let enabledSystemSound = true

const music = document.getElementById("audio")


function handleSound() {

    const soundButton = document.getElementById("btn-sound")

    if (enabledSystemSound) {

        enabledSystemSound = false
        soundButton.src = "./assests/images/Group 2.png"
        music.pause()
    } else {

        enabledSystemSound = true
        soundButton.src = "./assests/images/Captura de Tela (33).png"
        music.play()
    }

}


let board = []

function loadGame() {
    board.push("start");

    for (let i = 2; i <= 99; i++) {
        const randomPath = Math.floor(Math.random() * 2);

        board.push(randomPath);

        const element = document.getElementById("path-" + i);
        if (randomPath === 0) {
            element.style.backgroundImage = "url('./assests/tiles/path_free.png')";
        } else {
            element.style.backgroundImage = "url('./assests/tiles/path_blocked.png')";
        }
    }
}

loadGame();
let currentPosition = 0
let paths = document.querySelectorAll(".path")
function moveCharacter(event) {
    const key = event.key;

    let newPosition;
    console.log(event.key)
    switch (key) {
        case "w":
            newPosition = currentPosition - 10;
            break;
        case "s":
            newPosition = currentPosition + 10;
            break;
        case "a":
            newPosition = currentPosition - 1;
            break;
        case "d":
            let character = document.getElementById("character")
            console.log(character)
            newPosition = currentPosition + 1;
            console.log(paths[newPosition])
            paths[newPosition].append(character);
            currentPosition = newPosition;
            break;
        default:
            return;
    }

    const newElement = document.getElementById("path-" + newPosition);
    if (newElement) {
        const backgroundImage = getComputedStyle(newElement).backgroundImage;
        if (backgroundImage.includes("path_free")) {
            const currentElement = document.getElementById("path-" + currentPosition);
            currentElement.innerHTML = "";
            currentElement.appendChild(character);
            currentPosition = newPosition;
        }
    }
}

window.addEventListener("keydown", moveCharacter);



