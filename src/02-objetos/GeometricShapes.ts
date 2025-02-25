abstract class Shape{

    abstract area():number
    abstract perimeter():number

}

class Circle extends Shape{

    public base:number;
    public height:number;

    constructor(base:number,height:number){
        super()
        this.base = base;
        this.height = height;
    }

    radius():number{

        let result = (this.base + this.height) / 2;

        return result;
    }

    area():number{

        let result = Math.PI * Math.pow(this.radius(),2);

        return result;

    }
    
    perimeter():number{

        let result = ( 2 * Math.PI * this.radius()); 

        return result;
    }

}

class Rectangle extends Shape{

    public width: number;
    public height: number;

    constructor(width:number,height:number){
        super()
        this.width = width;
        this.height = height;
    }

    area():number{

        let result = this.width * this.height;

        return result;

    }
    
    perimeter():number{

        let result = Math.pow((this.width + this.height),2); 

        return result;
    }

}