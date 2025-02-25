interface moveZeros{
    moveZeros:(array:number[])=>number[];
}

class ZeroMover implements moveZeros{

    // implemento el metodo de la interfaz

    moveZeros(array:number[]):number[]{

        // declaro un arreglo para los numeros que contengan 0 y el resto
        let array_zeros:number[]=[];
        let array_number:number[]=[];

        // recorro el array original

        array.forEach(element => {

            // evaluo si es multiplo de diez, contiene minimo un cero o si es cero
            // y lo agrego al array de ceros

            if(element%10==0 || element===0){
                array_zeros.push(element);    
            }
            // evaluo si es un numero y lo agrego al array de numeros
            else{
                array_number.push(element)
            }
            
        });

        return [...array_number,...array_zeros]
    }
};

let movedor:ZeroMover = new ZeroMover();

console.log(
    movedor.moveZeros([1,2,3,4,0,0,5,6,7,8,9,20,2,3,3,4,5,3,654,344,30,40,500,540,3000])
);
