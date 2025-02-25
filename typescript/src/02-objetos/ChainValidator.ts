class ChainValidator{

    private array_words:string[];

    public constructor(words: string[]){
        this.array_words = words;
    }

    public validateChain():ValidateResult{

        let validation:ValidateResult;

// recorro cada elemento del array
// declarando al ultima posicion antes del largo normal -1
        for (let i = 0; i < this.array_words.length-1; i++) {

            let index_actual_word = 0;
            let index_next_word = 0;
            
            // para poder asignar la posicion siguiente sinq ue haya error de indexaxion

            let actual_element = this.array_words[i];
            let next_element = this.array_words[i+1];

            // evaluo cual palabra es mar larga
            // en base a eso compara la mas pequeña contra la mas larga evitando error de indexacion

            if(actual_element.length>next_element.length){

                for (let j = actual_element.length-1; j >= 0 ; j--) {

                    // si la condicion se cumple inicializo los valores de validation
                    //de lo contrario sera un mensaje de error

                    if(actual_element[j]==next_element[index_next_word]){
                        validation = {
                            status:200,
                            description:"Comunes encontrados"
                        };
                    }
                    else{
                        validation = {
                            status:400,
                            description:"Error al encadenar"
                        };
                    }

                    // variable utilizada para recorrer la otra palabra.(
                    // mientras que la actual se decrementa, esta va de adelante hacia atras y la actual de atras hacia adelante evaluando los caracteres de las posiciones)
                    index_next_word++;
                    
                }

            }
            else{

                for (let j = next_element.length-1; j >=0; j--) {               

                    if(next_element[j]==actual_element[index_actual_word]){
                        validation = {
                            status:200,
                            description:"Comunes encontrados"
                        };
                    }
                    else{
                        validation = {
                            status:400,
                            description:"Error al encadenar"
                        };
                    }

                    index_actual_word++;
                    
                }

            }

            
            
            

            
        }

        return validation;

    }

    public checkConcatenated(words: string[]){

    }
}

interface ValidateResult{
    status:number,
    description:string
}

// ejemplos

let words: string[] = ["hola","alohc","chola"]

let validate: ChainValidator = new ChainValidator(words);

console.log(validate.validateChain());
