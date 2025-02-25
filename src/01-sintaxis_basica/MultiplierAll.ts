// toma por parametros un array de numeros y devuelve una funcion que devuelve un array de numeros

function multiplyAll(arrayNumeros: number[]): (valorUnico: number) => number[] {

    // esta funcion es invocada al asignarle el metodo a una variable y pasarle por parametros el tipo especificado aqui
    return (valorUnico: number) => {

        // declaro el nuevo array para no modificar el segundo
        let nuevoArray: number[] = [];

        // recorro el array original
        arrayNumeros.forEach(element => {

            // agrego cada elemento del array original al nuevo array y
            // lo multiplico por el parametro que se pasa en la funcion interna

            nuevoArray.push(element * valorUnico);

        }); 

        return nuevoArray;

    }

}

// ejemplos de funcionalodad

let arrayOriginal: number[] = [1,2,3,4,5];
let segundoArray: number[] = [];

console.log("Array original: ");
console.log(arrayOriginal);

let reasignacion = multiplyAll(arrayOriginal)
segundoArray = reasignacion(5);

console.log("Segundo Array: ");
console.log(segundoArray);
console.log("Array original otra vez: ");
console.log(arrayOriginal);

