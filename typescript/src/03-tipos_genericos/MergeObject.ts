function MergeObject<T extends object | string | number | boolean, Y extends object | string | number | boolean>(firstObject:T,secondObject:Y){

    type merge_object = {
        firstObject: T,
        secondObject: Y
    }

    let combinatedObject:merge_object = {firstObject,secondObject};

    console.log(combinatedObject);
}

class Persona{
    private nombre:string;
    private edad:number;

    constructor(nombre:string,edad:number){
        this.nombre = nombre;
        this.edad = edad;    
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(nombre:string){
        this.nombre = nombre;
    }
    
    public getEdad():number{
        return this.edad;
    }

    public setEdad(edad:number){
        this.edad = edad;
    }
}

MergeObject(2,3);
MergeObject("Hola","Mundo");
MergeObject(true,false);
MergeObject(new Persona("Luis",22),"Nasa");