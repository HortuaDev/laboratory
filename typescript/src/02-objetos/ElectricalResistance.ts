interface Primera_banda{
    color_name: string
    value: number
}

interface Segunda_banda{
    color_name: string
    value: number
}

interface Multiplicador{
    color_name: string
    value: number
}

interface Tolerancia{
    color_name: string
    value: number
}

class Resistor {

    private primera_banda: Primera_banda
    private segunda_banda: Segunda_banda
    private multiplicador: Multiplicador
    private tolerancia: Tolerancia

    public constructor(primera_banda: Primera_banda,segunda_banda: Segunda_banda,multiplicador:Multiplicador,tolerancia:Tolerancia){
        this.primera_banda = primera_banda;
        this.segunda_banda = segunda_banda;
        this.multiplicador = multiplicador;
        this.tolerancia = tolerancia;
    }

    public decode():string{

        let primer_numero:string = this.primera_banda.value.toString();
        let segundo_numero: string = this.segunda_banda.value.toString();

        let dos_bandas:number = Number(primer_numero+segundo_numero);

        let numeros_multiplicador:number = dos_bandas*this.multiplicador.value;

        return 'Resistencia: ['+numeros_multiplicador+'], Tolerancia: ['+this.tolerancia.value*100+'%]\n';
    }
}

// Ejemplo practico

const primera_banda1: Primera_banda = {
    color_name: "marron",
    value: 1
};


const segunda_banda1: Segunda_banda = {
    color_name: "naranja",
    value: 3
};

const multiplicador1: Multiplicador ={
    color_name: "rojo",
    value: 100
}

const tolerancia1: Tolerancia = {
    color_name:"oro",
    value:0.05
}

const primera_banda2: Primera_banda = {
    color_name: "rojo",
    value: 2
};


const segunda_banda2: Segunda_banda = {
    color_name: "violeta",
    value: 7
};

const multiplicador2: Multiplicador ={
    color_name: "verde",
    value: 100000
}

const tolerancia2: Tolerancia = {
    color_name:"rojo",
    value:0.02
}

// Ejemplos practicos

const resistencia1 = new Resistor(primera_banda1,segunda_banda1,multiplicador1,tolerancia1);
console.log(resistencia1);
console.log(resistencia1.decode());


const resistencia2 = new Resistor(primera_banda2,segunda_banda2,multiplicador2,tolerancia2);
console.log(resistencia2);
console.log(resistencia2.decode());
