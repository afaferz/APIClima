class ConvertGraus {
    constructor(graus){
        this._graus = parseInt(graus.textContent);
    }

    get _celsiusToFahrenheit(){
        return (this._graus * 1.8) + 32;
    }
    get _celsius(){
        return this._graus;
    }
}