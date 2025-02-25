//  creo un tipo de dato nuevo, como una clase para asignarle atributos y metodos

type Pointd = {
    yPos: number;
    xPos: number;

    // asigno los metodos con la cantidad, tipo de parametros y tipo de retorno

    sumarCordenadas:(cordenadaY:number,coodernadaX:number)=>void;
    restarCordenadas:(cordenadaY:number,coodernadaX:number)=>void;

    calcularProducto:(numero:number)=>void;

    calcularDistEuclidea:(cordenadaY:number,cordenadaX:number)=>void;
}
 
// declaro una variable que contendra una inicializacion de ese tipo y le asigno tanto atributos como metodos
let punto: Pointd = {
    xPos: 120,
    yPos: 100,
    sumarCordenadas: (x:number,y:number) => {
        punto.yPos += y;
        punto.xPos += x;
        console.log("Cordenadas sumadas: xpos:["+punto.xPos+"], ypos:["+punto.yPos+"]");
    },
    restarCordenadas: (x:number,y:number) => {
        punto.yPos -= y;
        punto.xPos -= x;
        console.log("Cordenadas restadas: xpos:["+punto.xPos+"], ypos:["+punto.yPos+"]");
    },
    calcularProducto: (numero:number) => {
        let x_pro = punto.xPos * numero;
        let y_pro = punto.yPos * numero;
        let result = (x_pro * y_pro);
        console.log("El producto de un punto es: ",result);
    },
    calcularDistEuclidea:(x:number, y:number) => {
        let distEuclidea = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        console.log("La distancia euclidea es: ",distEuclidea);
    }

};

// ejemplos

punto.sumarCordenadas(10,40);
punto.restarCordenadas(10,40);
punto.calcularProducto(5);
punto.calcularDistEuclidea(10,20);

