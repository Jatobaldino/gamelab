
const board=[]

function loadgame(){
    board.push('start')
    for (let i =2;i<=24;i++){
        const randompath=Math.floor(Math.random()*2)
        board.push(randompath)
        const element=document.getElementById('path-'+1)  
        if (randompath===0){

            element.style.backgroundImage='url("")';
       }else{

            element.style.backgroundImage='url("./  ")';
       }  
    }
}
