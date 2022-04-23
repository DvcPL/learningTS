"use strict";
const hello = 'Hello World';
console.log(hello);
;
const me = {
    name: 'Piotrek',
    age: 33
};
const you = {
    name: 'Stefan',
    age: 35
};
console.log(me);
console.log(you);
class House {
    constructor(owner) {
        this.owner = owner;
    }
    changeOwner(owner) {
        this.owner = owner;
    }
    getOwner() {
        return this.owner;
    }
}
;
const house = new House('Zenek');
console.log(house);
