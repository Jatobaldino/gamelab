const board = []

function loadgame (){
board.push("start")

for(let i=2; i<=24; i++) {
    const randompath= Math.floor(Math.random() *2)

    board.push(randompath)

    const element = document.getElementById("path-"+i)
    
    if(randompath ===0){
element.style.backgroundImage = "url('caminho ')";
    }else{
element.style.backgroundImage=  "url('./ ')";

    }
}






















}