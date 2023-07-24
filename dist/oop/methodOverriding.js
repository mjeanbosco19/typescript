"use strict";
class People {
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
class Learner extends People {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking a test');
    }
}
let learner = new Learner(1, 'John', 'john@gmail.com');
class Teacher extends People {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName);
//# sourceMappingURL=methodOverriding.js.map