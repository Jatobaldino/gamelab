function soundcontrol() {

    const vall = document.querySelector(".volume")

    console.log(vall.src);

    if (vall.src === "./assests/images/Captura%20de%20Tela%20(33).png") {

        vall.src = "./assests/images/group\ 2.png"

        // document.querySelector("#music").play()
    } else {

        // document.querySelector("#music").pause()

        vall.src = "./assests/images/Captura\ de\ Tela\ (33).png"


    }

}