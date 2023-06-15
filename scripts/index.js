let enabledSystemSound = true

const music = document.getElementById("audio")


function handleSound() {

    const soundButton = document.getElementById("btn-sound")

    if (enabledSystemSound) {

        enabledSystemSound = false
        soundButton.src="./assests/images/Group 2.png"
        music.pause()
    } else {

        enabledSystemSound = true
        soundButton.src="./assests/images/Captura de Tela (33).png"
        music.play()
    }

}

function goToGamePage() {

window.location.href="./game.html"


}

function goToEmblemsPage() {

    window.location.href="./emblems.html"
    
    
    }