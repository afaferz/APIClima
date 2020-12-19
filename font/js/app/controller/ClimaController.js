class ClimaController {
    constructor(){
        this._divGraus = document.querySelector('.graus');
        this._button = Array.from(document.querySelectorAll('[data-button]'));

        //Recebe os elementos
        this._clima = new Clima();

        //Convert os graus do clima (C e F)
        this._convertGraus = new ConvertGraus(this._clima.climaGraus);

        //Exibe o clima
        this._climaView = new ClimaView(this._clima);
    }

    // recebeClima(){
        
    // }

    _converterClima(){
        this._grauConvertido;

        this._divGraus.addEventListener('click', botao =>{
            if(botao.target == this._button[0]){
                this._grauConvertido = this._convertGraus._celsiusToFahrenheit;
            }
            else{
                this._grauConvertido = this._convertGraus._celsius;
            }
            // console.log(this._grauConvertido, botao.target)
            return this._climaView.update(this._grauConvertido, botao.target);
        });
    }

    _adicionaClasseCssClima(){

    }
}