const span4 = document.querySelector('.informacoes span:nth-of-type(4)');



const updateHora = ()=>{
    const data = new Date;
    
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    //Adicionar 0 antes de números com apenas 1 casa decimal
    horas < 10 ? horas = '0' + horas : horas;
    minutos < 10 ? minutos = '0' + minutos : minutos;
    segundos < 10 ? segundos = '0' + segundos : segundos;

    //Adiciona hora atual ao HTML
    span4.textContent = `${horas} : ${minutos} : ${segundos}`;
};

setInterval(updateHora, 1000);
