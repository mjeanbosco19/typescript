"use strict";
class myPerson {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Principal extends myPerson {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
printNames([
    new Principal('Mugiraneza', 'Bosco'),
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
//# sourceMappingURL=polymorphism.js.map