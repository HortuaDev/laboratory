interface Container<T>{
    value:T,
    getValue():T
}

class Saludo implements Container<String>{

    value:string = "Hola";
    
    getValue() {

        return this.value;
    }
}


class Age implements Container<boolean>{

    value:boolean = true;
    
    getValue() {
        return this.value;
    }

}

let saludo1:Saludo = new Saludo()
console.log(saludo1.getValue());
;

let age:Age = new Age()
console.log(age.getValue());
;