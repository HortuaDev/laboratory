class DataStorage<T>{

    private array: T[] = [];
    private array_copy: T[] = [];

    public addItem(item:T):void{
        this.array.push(item);
    }

    public removeItem(item:T):void{
        
        let verificator:boolean = false;

        this.array.forEach(element => {
            if(element==item){
                verificator=true
            }
        }); 

        if(!verificator){
            console.log("El elemento no existe");
            return
        }

        this.array_copy = this.array.filter(element=> element!=item);

    }

    public getItems():T[]{
        return this.array_copy;
    }

}


let ds_number:DataStorage<number> = new DataStorage();
ds_number.addItem(1);
ds_number.addItem(2);
ds_number.addItem(3);
ds_number.addItem(4);
ds_number.addItem(5);
ds_number.removeItem(3);

console.log(ds_number.getItems());


let ds_string:DataStorage<string> = new DataStorage();
ds_string.addItem('a');
ds_string.addItem('b');
ds_string.addItem('c');
ds_string.addItem('d');
ds_string.addItem('e');
ds_string.removeItem('f');

console.log(ds_string.getItems());

