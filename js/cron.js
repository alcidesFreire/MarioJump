marcar = 0
function contar(){
   marcar++
   document.getElementById('contador').innerText= marcar
    
}
score = function(){
    setInterval(contar, 1400);
    
}
score();

parar = function(){
    clearInterval(contar);
}
parar();

  