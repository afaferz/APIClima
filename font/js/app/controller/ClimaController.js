class ClimaController {
    constructor(){
        this._divGraus = document.querySelector('.graus');
        this._button = Array.from(document.querySelectorAll('[data-button]'));

        //Recebe os elementos - Clima
        this._clima = new Clima();

        //Exibe os elementos do clima
        this._climaView = new ClimaView(this._clima);
    }

    _receberClima(){
        this._resultClima = 
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasilia&appid=8b262d3cb91d271154c37d223350e878&lang=pt_br&units=metric')
        .then(r => r.json())
        .then(clima => {
            console.log(clima)
            // clima.BRL;

            //Insere os dados da API na página
            this._climaView.adicionar(this._clima, clima);

            //Recebe a class ConvertGraus baseado no elemento this._clima._graus
            this._convertGraus = new ConvertGraus(this._clima._graus);
        });
    }

    _converterClima(){
        this._grauConvertido;

        this._divGraus.addEventListener('click', botao =>{
            if(botao.target == this._button[0]){
                this._grauConvertido = this._convertGraus._celsiusToFahrenheit;
            }
            else{
                this._grauConvertido = this._convertGraus._celsius;
            }
            return this._climaView.updateGraus(this._grauConvertido, botao.target);
        });
    }

    _unify(){
        this._receberClima();
        this._converterClima();
    }
}