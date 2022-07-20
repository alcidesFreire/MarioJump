//const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
marcar = 0
function contar(){
   marcar++
   document.getElementById('contador').innerText= marcar
    
}
score = function(){
    setInterval(contar, 1400);
    
}
function pegaScore(){
   



}



pegaScore(pegaScore);
score();