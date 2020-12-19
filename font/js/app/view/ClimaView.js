class ClimaView{
    constructor(elementoClima){
        //Recebe os 4 spans do clima
        this.elementoClima = elementoClima;
        this._classesGraus = ['celsius', 'fahrenheit'];
    }

    get classesGraus(){
        return this._classesGraus;
    }

    _template(model, botao){
        //Pega o valor do textContent do span 'graus'
        this.elementoClima._graus.textContent = model;
        
        //Concertar isto para ficar mais arrumadinho
        if(botao.getAttribute('data-button') == 'Fahrenheit'){
            this.elementoClima._graus.classList.add(this._classesGraus[1]);
            this.elementoClima._graus.classList.remove(this._classesGraus[0]);
        }
        else{
            this.elementoClima._graus.classList.add(this._classesGraus[0]);
            this.elementoClima._graus.classList.remove(this._classesGraus[1]);
        }
    }

    update(model, botao){
        return this._template(model, botao);
    }
}