// Creo la interfaz y declaro el metodo que se debe utilizar

interface IAggregator{

    // variable, parametros, retorno 
    // (el pipe | especifica que acepta un numero o un string como valor en el arreglo)
    // (la coma, especifica que retorna primero un numero y luego un string)
    
    process: (array:(number|string)[])=>[number,string];
}

// Implemen
class Aggregator implements IAggregator{

    process(array:(number|string)[]):[number,string]{
       
        // almaceno solo los numeros (corregido)
        let array_numbers:number[] = array.filter(element => typeof(element)=='number');

        // almaceno solo las letras
        let array_words:string[] = array.filter(element => typeof(element)=='string');
        
        let sum:number = 0;
        let words: string = "";

        // las sumo a una variable
        array_numbers.forEach(element => {
            sum += element;
        });

        // las concatenoa una variable
        array_words.forEach(element => {
            words += element;
        });

       
        return [sum,words];
    }

}

let agregator:Aggregator = new Aggregator();


console.log(agregator.process([1,'a',2,'b',3,'c',4,'d']));

