const hello : string = 'Hello World';
console.log(hello)

interface Person {
    name:string,
    age: number
};
const me : Person = {
    name: 'Piotrek',
    age: 33
};
const you : Person = {
    name: 'Stefan',
    age: 35
};
console.log(me);
console.log(you);

class House {
    owner : string ;
    constructor(owner:string){
        this.owner = owner;
    }
    changeOwner(owner : string) : void {
        this.owner = owner;
     }
     getOwner() : string {
       return this.owner;
     }
};
const house : House = new House('Zenek');
console.log(house)