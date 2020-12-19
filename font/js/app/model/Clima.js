class Clima{
    constructor(){
        this._cidade = document.querySelector('[data-cidade]');
        this._clima = document.querySelector('[data-clima]');
        this._graus = document.querySelector('[data-graus]');
    }

    get climaGraus(){
        return this._graus;
    }
}