// valores ingresados por el usuario
let color1: string;
let color2: string;
let color3: string;
let color4: string;

// valores de la resistensia
let value_resistor_1: string = null;
let value_resistor_2: string = null;
let value_resistor_3: number = 1;
let value_resistor_4: number = 0.05;

let min_value_resistor: number = null;
let max_value_resistor: number = null;

// colores permitidos para las resistencias
let stored_colors: { color: string, valor: number }[] = [
    { color: "Negro", valor: 0 },
    { color: "Marron", valor: 1 },
    { color: "Rojo", valor: 2 },
    { color: "Naranja", valor: 3 },
    { color: "Amarillo", valor: 4 },
    { color: "Verde", valor: 5 },
    { color: "Azul", valor: 6 },
    { color: "Violeta", valor: 7 },
    { color: "Gris", valor: 8 },
    { color: "Blanco", valor: 9 }];

// valor asignado a cada color
let value_colors: { color: string; valor: number }[] = [
    { color: "Negro", valor: 1 },
    { color: "Marron", valor: 10 },
    { color: "Rojo", valor: 100 },
    { color: "Naranja", valor: 1000 },
    { color: "Amarillo", valor: 10000 },
    { color: "Verde", valor: 100000 },
    { color: "Azul", valor: 1000000 },
    { color: "Violeta", valor: 10000000 },
    { color: "Gris", valor: 100000000 },
    { color: "Blanco", valor: 1000000000 }
];

// tolerancia asignada a cada color
let tolerance_colors: { color: string; valor: number }[] = [
    { color: "Marron", valor: 0.01 },
    { color: "Rojo", valor: 0.02 },
    { color: "Verde", valor: 0.005 },
    { color: "Azul", valor: 0.0025 },
    { color: "Violeta", valor: 0.001 },
    { color: "Gris", valor: 0.0005 },
    { color: "Oro", valor: 0.05 },
    { color: "Plata", valor: 0.1 }
];

function decodeResistor(color1: string = "", color2: string = "", color3: string = "", color4: string = ""): string {


    // recorro el array de los colores almacenados y si el primer parametro concuerda con alguno cambio s valor, de lo contrario se queda null
    stored_colors.forEach(element => {
        if (color1 == element['color'].toLowerCase()) {
            value_resistor_1 = element['valor'].toString();
        }
    });

    stored_colors.forEach(element => {
        if (color2 == element['color'].toLowerCase()) {
            value_resistor_2 = element['valor'].toString();
        }
    });

    value_colors.forEach(element => {
        if (color3 == element['color'].toLowerCase()) {
            value_resistor_3 = element['valor'];
        }


    });

    tolerance_colors.forEach(element => {
        if(color4==element['color'].toLowerCase()){
            value_resistor_4 = element['valor'];
        }
    });

    let resistor_value:number = Number(value_resistor_1+value_resistor_2) * value_resistor_3;
    
    min_value_resistor = resistor_value * (1 - value_resistor_4);
    max_value_resistor = resistor_value * (1 + value_resistor_4);

    return `${resistor_value} Ω ±${value_resistor_4 * 100}% (${min_value_resistor} Ω - ${max_value_resistor} Ω)`;

}

console.log(decodeResistor("marron", "negro", "marron", "oro"));

