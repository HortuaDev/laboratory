let encadenado: boolean = false;
let resultado_letras_concuerdan: string = "Letras: ";


function meshArray(text: string): string {

    // separo el texto por palabras y lo almaceno en un array
    let array_words = text.split(" ");

    console.log(array_words);

    // obtengo el ultimo caracter pasando por parametro la longitud de la palabra en la que me encuentro

    // last_word = array_words[0].charAt(array_words[0].length - 1);

    // recorro el array desde 1 para evaluar desde la posicion anterior a la iteracion del array,
    //  ejem: array[0] == array[1]

    for (let i = 0; i < array_words.length - 1; i++) {

        // FINAL DE LA PALABRA principal                        INICIO DE LA PALABRA secundaria
        if (array_words[i].charAt(array_words[i].length - 1) == array_words[i + 1].charAt(0)) {

            resultado_letras_concuerdan += array_words[i + 1].charAt(0) + " - " + array_words[i].charAt(array_words[i].length - 1)

            // verifico si existen mas letras que coincidan con la concatenacion

            if (array_words[i].charAt(array_words[i].length - 2) == array_words[i + 1].charAt(1)) {

                resultado_letras_concuerdan += array_words[i + 1].charAt(0) + " - " + array_words[i].charAt(array_words[i].length - 1)


            }
            encadenado = true;
        }

    }

    console.log(resultado_letras_concuerdan);


    if (!encadenado) {
        return "Error al encadenar"
    }

    return resultado_letras_concuerdan;

}

// ejemplo
meshArray("HOLA ANTONIO ESTABAMOS SENTADOS ESPERANDO POR RAQUEL")