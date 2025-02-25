let numberArray:number[] = [10,1,540,5,201,5,40,52,609,704060,90,4,60,4,65,4,26,7,8];
let numberArrayCopy: number[] = [];
let newArrayNumbers: number[] = [];
let numero_resultante: string = "";
let ceros_resultantes: number[] = [];
let contador_ceros = 0;



function moveZeros(array:number[]):void{

    // recorro cada elemento del array
    array.forEach((element) => {
        
        console.log(element);

        // cada elemento lo convierto a string y separo las unidades que lo conforman,
        //  almacenandolas en una posicion del array pero como objetos
        //  que contiene los numeros separados por comas ejm: 10:number = [1,0]:string

        let elemento_A_Evaluar_En_Formato_Texto = element.toString().split("")

        // recorro cada posicion string del array ejm: [1,0]:string

        elemento_A_Evaluar_En_Formato_Texto.forEach(internalElement => {
            
            // evaluo que el numero en el que me encuentro sea cero
            if(internalElement=="0"){
                // agrego un 0 en otro array que equivale al cero que se encontro en el recorrido
                ceros_resultantes.push(0);
            }

            // si no es cero, lo agrego a oreo array que contendran solo los numeros diferentes de cero
            if(internalElement!="0"){
                numero_resultante += internalElement;
            }


        });

        // al terminar de recorrer la posicion del array, agrego los numeros sin cero al array espejo del original, ya que no se debe modificar el original
        agregar_al_otro_array(numero_resultante)

        // reasigno el valor a vacio
        numero_resultante = "";
 
    });

    // agrego a un tercer array la concatenacion de numeros sin cero, y los ceros, al final

    newArrayNumbers = [...numberArrayCopy,...ceros_resultantes];
    
    console.log("Resultado final: ",newArrayNumbers);

};

function agregar_al_otro_array(numero:string){

    numberArrayCopy.push(Number(numero));

}

moveZeros(numberArray)