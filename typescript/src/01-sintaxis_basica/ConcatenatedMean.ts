// Paso por argumentos un array que acepta valores numericos O de texto (number|string)[] y devuelvo lo mismo

function meanAndConcatenate(array: (number|string)[]): (number|string)[]{
    
    let numeros: number[] = [];
    let numerosSumados:number = 0;
    let letras: string[] = [];
    let letrasConcatenadas:string = "";

    // recorro el array original
    array.forEach(element => {
        
        // evaluo el tipo de dato del elemento que estoi iterando y
        //  lo almaceno en su array correspondiente al tipo
 
        if(typeof element == 'number'){
            numeros.push(element)
        }
        else if(typeof element == 'string'){
            letras.push(element);
        }

    });

    // recorro los arrays de cada tipo, y sumo los numeros 
    numeros.forEach(element => {
        numerosSumados += element;
    });

    // y concateno las letras
    letras.forEach(element => {
        letrasConcatenadas += element;
    });

    // retorno un nuevo array con los valores ordenados
    return [numerosSumados,letrasConcatenadas];
}

// ejemplo
console.log(meanAndConcatenate([1,'a',2,'b',3,'c',4,'d']));



