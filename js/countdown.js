document.addEventListener("DOMContentLoaded", () => setInterval(() => {
	function convertTime(milliseconds) {
      const minutes = Math.floor(milliseconds / 60000);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      const remainingHours = hours % 24;
      const remainingMinutes = minutes % 60;

      return[days,remainingHours,remainingMinutes];
  }
  
	for(let i of [...document.getElementsByClassName("contagem_regressiva")]){
  	let tempo1 = i.getAttribute("data-termino"), tempo2, tempo3;
    tempo1 = (new Date(tempo1)).getTime();
    tempo2 = (new Date()).getTime();
    tempo3 = convertTime(tempo1 - tempo2);
		
    if(tempo3[0] < 10){
    	tempo3[0] = `0${tempo3[0]}`;
    }
		
    if(tempo3[1] < 10){
    	tempo3[1] = `0${tempo3[1]}`;
    }
    
    if(tempo3[2] < 10){
    	tempo3[2] = `0${tempo3[2]}`;
    }
    
    i.textContent = `${tempo3[0]} dias, ${tempo3[1]} horas e ${tempo3[2]} minutos para acabar`;
  }
}, 1E3));