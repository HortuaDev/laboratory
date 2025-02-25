function wrapArray<T>(element:T,time:number): T[]{

    let array: T[] = [];

    for (let i = 0; i < time; i++) {
        array.push(element)
    }

    return array;
}

let a = wrapArray(4,5);
let b = wrapArray(true,5);
let d = wrapArray('coche',5);
let c = wrapArray({name:"luis",age:22},5);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
