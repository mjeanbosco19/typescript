class People {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  walk() {
    console.log('Walking');
  }
}

class Learner extends People {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log('Taking a test');
  }
}

let learner = new Learner(1, 'John', 'john@gmail.com');

// Method Overriding

class Teacher extends People {
  override get fullName() {
    return 'Professor ' + super.fullName;
  }
}

let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName);
